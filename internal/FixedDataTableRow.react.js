/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableRow.react
 * @typechecks
 */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('./React');
var ReactComponentWithPureRenderMixin = require('./ReactComponentWithPureRenderMixin');
var FixedDataTableCellGroup = require('./FixedDataTableCellGroup.react');

var cx = require('./cx');
var joinClasses = require('./joinClasses');
var translateDOMPositionXY = require('./translateDOMPositionXY');

var PropTypes = React.PropTypes;

// Drag and drop
var DropTarget = require('react-dnd').DropTarget;
var DragSource = require('react-dnd').DragSource;
var DragDropConfig = require('././FixedDataTableRowDragDropConfig');

/**
 * Component that renders the row for <FixedDataTable />.
 * This component should not be used directly by developer. Instead,
 * only <FixedDataTable /> should use the component internally.
 */
var FixedDataTableRowImpl = React.createClass({
  displayName: 'FixedDataTableRowImpl',

  mixins: [ReactComponentWithPureRenderMixin],

  propTypes: {
    /**
     * The row data to render. The data format can be a simple Map object
     * or an Array of data.
     */
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

    /**
     * Array of <FixedDataTableColumn /> for the fixed columns.
     */
    fixedColumns: PropTypes.array.isRequired,

    /**
     * Height of the row.
     */
    height: PropTypes.number.isRequired,

    /**
     * The row index.
     */
    index: PropTypes.number.isRequired,

    /**
     * Array of <FixedDataTableColumn /> for the scrollable columns.
     */
    scrollableColumns: PropTypes.array.isRequired,

    /**
     * The distance between the left edge of the table and the leftmost portion
     * of the row currently visible in the table.
     */
    scrollLeft: PropTypes.number.isRequired,

    /**
     * Width of the row.
     */
    width: PropTypes.number.isRequired,

    /**
     * Fire when a row is clicked.
     */
    onClick: PropTypes.func,

    /**
     * Fire when a row is double clicked.
     */
    onDoubleClick: PropTypes.func,

    /**
     * Callback for when resizer knob (in FixedDataTableCell) is clicked
     * to initialize resizing. Please note this is only on the cells
     * in the header.
     * @param number combinedWidth
     * @param number leftOffset
     * @param number cellWidth
     * @param number|string columnKey
     * @param object event
     */
    onColumnResize: PropTypes.func,

    /**
     * Fire when a row is being dragging
     */
    onDragDrop: PropTypes.func,

    /**
     * Active the sortable mode
     */
    isSortable: PropTypes.bool
  },

  render: function render() /*object*/{
    var style = {
      width: this.props.width,
      height: this.props.height
    };

    var className = cx({
      'fixedDataTableRowLayout/main': true,
      'public/fixedDataTableRow/main': true,
      'public/fixedDataTableRow/highlighted': this.props.index % 2 === 1,
      'public/fixedDataTableRow/odd': this.props.index % 2 === 1,
      'public/fixedDataTableRow/even': this.props.index % 2 === 0
    });

    var isHeaderOrFooterRow = this.props.index === -1;
    if (!this.props.data && !isHeaderOrFooterRow) {
      return React.createElement('div', {
        className: joinClasses(className, this.props.className),
        style: style
      });
    }

    var fixedColumnsWidth = this._getColumnsWidth(this.props.fixedColumns);
    var fixedColumns = React.createElement(FixedDataTableCellGroup, {
      key: 'fixed_cells',
      height: this.props.height,
      left: 0,
      width: fixedColumnsWidth,
      zIndex: 2,
      columns: this.props.fixedColumns,
      data: this.props.data,
      onColumnResize: this.props.onColumnResize,
      rowHeight: this.props.height,
      rowIndex: this.props.index
    });
    var columnsShadow = this._renderColumnsShadow(fixedColumnsWidth);
    var scrollableColumns = React.createElement(FixedDataTableCellGroup, {
      key: 'scrollable_cells',
      height: this.props.height,
      left: this.props.scrollLeft,
      offsetLeft: fixedColumnsWidth,
      width: this.props.width - fixedColumnsWidth,
      zIndex: 0,
      columns: this.props.scrollableColumns,
      data: this.props.data,
      onColumnResize: this.props.onColumnResize,
      rowHeight: this.props.height,
      rowIndex: this.props.index
    });

    return React.createElement(
      'div',
      {
        className: joinClasses(className, this.props.className),
        onClick: this.props.onClick ? this._onClick : null,
        onDoubleClick: this.props.onDoubleClick ? this._onDoubleClick : null,
        onMouseDown: this.props.onMouseDown ? this._onMouseDown : null,
        onMouseEnter: this.props.onMouseEnter ? this._onMouseEnter : null,
        onMouseLeave: this.props.onMouseLeave ? this._onMouseLeave : null,
        style: style },
      React.createElement(
        'div',
        { className: cx('fixedDataTableRowLayout/body') },
        fixedColumns,
        scrollableColumns,
        columnsShadow
      )
    );
  },

  _getColumnsWidth: function _getColumnsWidth( /*array*/columns) /*number*/{
    var width = 0;
    for (var i = 0; i < columns.length; ++i) {
      width += columns[i].props.width;
    }
    return width;
  },

  _renderColumnsShadow: function _renderColumnsShadow( /*number*/left) /*?object*/{
    if (left > 0) {
      var className = cx({
        'fixedDataTableRowLayout/fixedColumnsDivider': true,
        'fixedDataTableRowLayout/columnsShadow': this.props.scrollLeft > 0,
        'public/fixedDataTableRow/fixedColumnsDivider': true,
        'public/fixedDataTableRow/columnsShadow': this.props.scrollLeft > 0
      });
      var style = {
        left: left,
        height: this.props.height
      };
      return React.createElement('div', { className: className, style: style });
    }
  },

  _onClick: function _onClick( /*object*/event) {
    this.props.onClick(event, this.props.index, this.props.data);
  },

  _onDoubleClick: function _onDoubleClick( /*object*/event) {
    this.props.onDoubleClick(event, this.props.index, this.props.data);
  },

  _onMouseDown: function _onMouseDown( /*object*/event) {
    this.props.onMouseDown(event, this.props.index, this.props.data);
  },

  _onMouseEnter: function _onMouseEnter( /*object*/event) {
    this.props.onMouseEnter(event, this.props.index, this.props.data);
  },

  _onMouseLeave: function _onMouseLeave( /*object*/event) {
    this.props.onMouseLeave(event, this.props.index, this.props.data);
  }
});

var FixedDataTableRow = React.createClass({
  displayName: 'FixedDataTableRow',

  mixins: [ReactComponentWithPureRenderMixin],

  propTypes: {
    /**
     * Height of the row.
     */
    height: PropTypes.number.isRequired,

    /**
     * Z-index on which the row will be displayed. Used e.g. for keeping
     * header and footer in front of other rows.
     */
    zIndex: PropTypes.number,

    /**
     * The vertical position where the row should render itself
     */
    offsetTop: PropTypes.number.isRequired,

    /**
     * Width of the row.
     */
    width: PropTypes.number.isRequired,

    onDragDrop: PropTypes.func
  },

  render: function render() /*object*/{
    var connectDragSource = this.props.connectDragSource;
    var connectDropTarget = this.props.connectDropTarget;

    var style = {
      width: this.props.width,
      height: this.props.height,
      zIndex: this.props.zIndex ? this.props.zIndex : 0
    };

    var classes = cx({
      'fixedDataTableRowLayout/rowWrapper': true,
      'public/fixedDataTableRowLayout/rowWrapper/hoveredRow': this.props.hovered,
      'public/fixedDataTableRowLayout/rowWrapper/dragging': this.props.isDragging
    });

    translateDOMPositionXY(style, 0, this.props.offsetTop);

    return connectDragSource(connectDropTarget(React.createElement(
      'div',
      { style: style,
        className: classes },
      React.createElement(FixedDataTableRowImpl, _extends({}, this.props, {
        offsetTop: undefined,
        zIndex: undefined
      }))
    )));
  }
});

var FixedDataTableRowDecorated = DropTarget(DragDropConfig.type, DragDropConfig.drop.target, DragDropConfig.drop.collect)(FixedDataTableRow);
module.exports = DragSource(DragDropConfig.type, DragDropConfig.drag.source, DragDropConfig.drag.collect)(FixedDataTableRowDecorated);