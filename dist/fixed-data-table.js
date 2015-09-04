/**
 * FixedDataTable v0.4.7 
 *
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["FixedDataTable"] = factory(require("react"));
	else
		root["FixedDataTable"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_30__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(21);
	__webpack_require__(23);
	module.exports = __webpack_require__(25);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRoot
	 */

	'use strict';

	var FixedDataTable = __webpack_require__(26);
	var FixedDataTableColumn = __webpack_require__(32);
	var FixedDataTableColumnGroup = __webpack_require__(31);

	var FixedDataTableRoot = {
	  Column: FixedDataTableColumn,
	  ColumnGroup: FixedDataTableColumnGroup,
	  Table: FixedDataTable
	};

	FixedDataTableRoot.version = '0.4.7';

	module.exports = FixedDataTableRoot;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTable.react
	 * @typechecks
	 */

	/* jslint bitwise: true */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var FixedDataTableHelper = __webpack_require__(27);
	var React = __webpack_require__(29);
	var ReactComponentWithPureRenderMixin = __webpack_require__(33);
	var ReactWheelHandler = __webpack_require__(34);
	var Scrollbar = __webpack_require__(42);
	var FixedDataTableBufferedRows = __webpack_require__(54);
	var FixedDataTableColumnResizeHandle = __webpack_require__(154);
	var FixedDataTableRow = __webpack_require__(59);
	var FixedDataTableScrollHelper = __webpack_require__(155);
	var FixedDataTableWidthHelper = __webpack_require__(157);

	var cx = __webpack_require__(48);
	var debounceCore = __webpack_require__(158);
	var emptyFunction = __webpack_require__(35);
	var invariant = __webpack_require__(53);
	var joinClasses = __webpack_require__(68);
	var shallowEqual = __webpack_require__(159);
	var translateDOMPositionXY = __webpack_require__(49);

	var PropTypes = React.PropTypes;

	var ReactChildren = React.Children;

	var renderToString = FixedDataTableHelper.renderToString;
	var EMPTY_OBJECT = {};
	var BORDER_HEIGHT = 1;

	/**
	 * Data grid component with fixed or scrollable header and columns.
	 *
	 * The layout of the data table is as follows:
	 *
	 * ```
	 * +---------------------------------------------------+
	 * | Fixed Column Group    | Scrollable Column Group   |
	 * | Header                | Header                    |
	 * |                       |                           |
	 * +---------------------------------------------------+
	 * |                       |                           |
	 * | Fixed Header Columns  | Scrollable Header Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Body Columns    | Scrollable Body Columns   |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * |                       |                           |
	 * | Fixed Footer Columns  | Scrollable Footer Columns |
	 * |                       |                           |
	 * +-----------------------+---------------------------+
	 * ```
	 *
	 * - Fixed Column Group Header: These are the headers for a group
	 *   of columns if included in the table that do not scroll
	 *   vertically or horizontally.
	 *
	 * - Scrollable Column Group Header: The header for a group of columns
	 *   that do not move while scrolling vertically, but move horizontally
	 *   with the horizontal scrolling.
	 *
	 * - Fixed Header Columns: The header columns that do not move while scrolling
	 *   vertically or horizontally.
	 *
	 * - Scrollable Header Columns: The header columns that do not move
	 *   while scrolling vertically, but move horizontally with the horizontal
	 *   scrolling.
	 *
	 * - Fixed Body Columns: The body columns that do not move while scrolling
	 *   horizontally, but move vertically with the vertical scrolling.
	 *
	 * - Scrollable Body Columns: The body columns that move while scrolling
	 *   vertically or horizontally.
	 */
	var FixedDataTable = React.createClass({
	  displayName: 'FixedDataTable',

	  propTypes: {

	    /**
	     * Pixel width of table. If all columns do not fit,
	     * a horizontal scrollbar will appear.
	     */
	    width: PropTypes.number.isRequired,

	    /**
	     * Pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    height: PropTypes.number,

	    /**
	     * Maximum pixel height of table. If all rows do not fit,
	     * a vertical scrollbar will appear.
	     *
	     * Either `height` or `maxHeight` must be specified.
	     */
	    maxHeight: PropTypes.number,

	    /**
	     * Pixel height of table's owner, this is used in a managed scrolling
	     * situation when you want to slide the table up from below the fold
	     * without having to constantly update the height on every scroll tick.
	     * Instead, vary this property on scroll. By using `ownerHeight`, we
	     * over-render the table while making sure the footer and horizontal
	     * scrollbar of the table are visible when the current space for the table
	     * in view is smaller than the final, over-flowing height of table. It
	     * allows us to avoid resizing and reflowing table when it is moving in the
	     * view.
	     *
	     * This is used if `ownerHeight < height` (or `maxHeight`).
	     */
	    ownerHeight: PropTypes.number,

	    overflowX: PropTypes.oneOf(['hidden', 'auto']),
	    overflowY: PropTypes.oneOf(['hidden', 'auto']),

	    /**
	     * Number of rows in the table.
	     */
	    rowsCount: PropTypes.number.isRequired,

	    /**
	     * Pixel height of rows unless `rowHeightGetter` is specified and returns
	     * different value.
	     */
	    rowHeight: PropTypes.number.isRequired,

	    /**
	     * If specified, `rowHeightGetter(index)` is called for each row and the
	     * returned value overrides `rowHeight` for particular row.
	     */
	    rowHeightGetter: PropTypes.func,

	    /**
	     * To get rows to display in table, `rowGetter(index)`
	     * is called. `rowGetter` should be smart enough to handle async
	     * fetching of data and return temporary objects
	     * while data is being fetched.
	     */
	    rowGetter: PropTypes.func.isRequired,

	    /**
	     * To get any additional CSS classes that should be added to a row,
	     * `rowClassNameGetter(index)` is called.
	     */
	    rowClassNameGetter: PropTypes.func,

	    /**
	     * Pixel height of the column group header.
	     */
	    groupHeaderHeight: PropTypes.number,

	    /**
	     * Pixel height of header.
	     */
	    headerHeight: PropTypes.number.isRequired,

	    /**
	     * Function that is called to get the data for the header row.
	     * If the function returns null, the header will be set to the
	     * Column's label property.
	     */
	    headerDataGetter: PropTypes.func,

	    /**
	     * Pixel height of footer.
	     */
	    footerHeight: PropTypes.number,

	    /**
	     * DEPRECATED - use footerDataGetter instead.
	     * Data that will be passed to footer cell renderers.
	     */
	    footerData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

	    /**
	     * Function that is called to get the data for the footer row.
	     */
	    footerDataGetter: PropTypes.func,

	    /**
	     * Value of horizontal scroll.
	     */
	    scrollLeft: PropTypes.number,

	    /**
	     * Index of column to scroll to.
	     */
	    scrollToColumn: PropTypes.number,

	    /**
	     * Value of vertical scroll.
	     */
	    scrollTop: PropTypes.number,

	    /**
	     * Index of row to scroll to.
	     */
	    scrollToRow: PropTypes.number,

	    /**
	     * Callback that is called when scrolling starts with current horizontal
	     * and vertical scroll values.
	     */
	    onScrollStart: PropTypes.func,

	    /**
	     * Callback that is called when scrolling ends or stops with new horizontal
	     * and vertical scroll values.
	     */
	    onScrollEnd: PropTypes.func,

	    /**
	     * Callback that is called when `rowHeightGetter` returns a different height
	     * for a row than the `rowHeight` prop. This is necessary because initially
	     * table estimates heights of some parts of the content.
	     */
	    onContentHeightChange: PropTypes.func,

	    /**
	     * Callback that is called when a row is clicked.
	     */
	    onRowClick: PropTypes.func,

	    /**
	     * Callback that is called when a row is double clicked.
	     */
	    onRowDoubleClick: PropTypes.func,

	    /**
	     * Callback that is called when a mouse-down event happens on a row.
	     */
	    onRowMouseDown: PropTypes.func,

	    /**
	     * Callback that is called when a mouse-enter event happens on a row.
	     */
	    onRowMouseEnter: PropTypes.func,

	    /**
	     * Callback that is called when a mouse-leave event happens on a row.
	     */
	    onRowMouseLeave: PropTypes.func,

	    /**
	     * Callback that is called when resizer has been released
	     * and column needs to be updated.
	     *
	     * Required if the isResizable property is true on any column.
	     *
	     * ```
	     * function(
	     *   newColumnWidth: number,
	     *   dataKey: string,
	     * )
	     * ```
	     */
	    onColumnResizeEndCallback: PropTypes.func,

	    /**
	     * Whether a column is currently being resized.
	     */
	    isColumnResizing: PropTypes.bool,

	    /**
	     * Active the drag and drop (Sortable) interaction
	     */
	    isSortable: PropTypes.bool,

	    /**
	     * Callback that is called when and item is being dragging over the table.
	     *
	     * function (
	     *   itemOnDrag: object,
	     *   itemHover: object
	     * )
	     */
	    onDragDrop: PropTypes.func,

	    /**
	     * Callback that is called when and item is dropped
	     *
	     * function (
	     *   itemOnDrag: object,
	     *   itemHover: object
	     * )
	     */
	    onDrop: PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      footerHeight: 0,
	      groupHeaderHeight: 0,
	      headerHeight: 0,
	      scrollLeft: 0,
	      scrollTop: 0
	    };
	  },

	  getInitialState: function getInitialState() /*object*/{
	    var props = this.props;
	    var viewportHeight = (props.height === undefined ? props.maxHeight : props.height) - (props.headerHeight || 0) - (props.footerHeight || 0) - (props.groupHeaderHeight || 0);
	    this._scrollHelper = new FixedDataTableScrollHelper(props.rowsCount, props.rowHeight, viewportHeight, props.rowHeightGetter);
	    if (props.scrollTop) {
	      this._scrollHelper.scrollTo(props.scrollTop);
	    }
	    this._didScrollStop = debounceCore(this._didScrollStop, 160, this);

	    return this._calculateState(this.props);
	  },

	  componentWillMount: function componentWillMount() {
	    var scrollToRow = this.props.scrollToRow;
	    if (scrollToRow !== undefined && scrollToRow !== null) {
	      this._rowToScrollTo = scrollToRow;
	    }
	    var scrollToColumn = this.props.scrollToColumn;
	    if (scrollToColumn !== undefined && scrollToColumn !== null) {
	      this._columnToScrollTo = scrollToColumn;
	    }
	    this._wheelHandler = new ReactWheelHandler(this._onWheel, this._shouldHandleWheelX, this._shouldHandleWheelY);
	  },

	  _shouldHandleWheelX: function _shouldHandleWheelX( /*number*/delta) /*boolean*/{
	    if (this.props.overflowX === 'hidden') {
	      return false;
	    }

	    delta = Math.round(delta);
	    if (delta === 0) {
	      return false;
	    }

	    return delta < 0 && this.state.scrollX > 0 || delta >= 0 && this.state.scrollX < this.state.maxScrollX;
	  },

	  _shouldHandleWheelY: function _shouldHandleWheelY( /*number*/delta) /*boolean*/{
	    if (this.props.overflowY === 'hidden' || delta === 0) {
	      return false;
	    }

	    delta = Math.round(delta);
	    if (delta === 0) {
	      return false;
	    }

	    return delta < 0 && this.state.scrollY > 0 || delta >= 0 && this.state.scrollY < this.state.maxScrollY;
	  },

	  _reportContentHeight: function _reportContentHeight() {
	    var scrollContentHeight = this.state.scrollContentHeight;
	    var reservedHeight = this.state.reservedHeight;
	    var requiredHeight = scrollContentHeight + reservedHeight;
	    var contentHeight;
	    var useMaxHeight = this.props.height === undefined;
	    if (useMaxHeight && this.props.maxHeight > requiredHeight) {
	      contentHeight = requiredHeight;
	    } else if (this.state.height > requiredHeight && this.props.ownerHeight) {
	      contentHeight = Math.max(requiredHeight, this.props.ownerHeight);
	    } else {
	      contentHeight = this.state.height + this.state.maxScrollY;
	    }
	    if (contentHeight !== this._contentHeight && this.props.onContentHeightChange) {
	      this.props.onContentHeightChange(contentHeight);
	    }
	    this._contentHeight = contentHeight;
	  },

	  componentDidMount: function componentDidMount() {
	    this._reportContentHeight();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    var scrollToRow = nextProps.scrollToRow;
	    if (scrollToRow !== undefined && scrollToRow !== null) {
	      this._rowToScrollTo = scrollToRow;
	    }
	    var scrollToColumn = nextProps.scrollToColumn;
	    if (scrollToColumn !== undefined && scrollToColumn !== null) {
	      this._columnToScrollTo = scrollToColumn;
	    }

	    var newOverflowX = nextProps.overflowX;
	    var newOverflowY = nextProps.overflowY;
	    if (newOverflowX !== this.props.overflowX || newOverflowY !== this.props.overflowY) {
	      this._wheelHandler = new ReactWheelHandler(this._onWheel, newOverflowX !== 'hidden', // Should handle horizontal scroll
	      newOverflowY !== 'hidden' // Should handle vertical scroll
	      );
	    }

	    this.setState(this._calculateState(nextProps, this.state));
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._reportContentHeight();
	  },

	  render: function render() /*object*/{
	    var state = this.state;
	    var props = this.props;

	    var groupHeader;
	    if (state.useGroupHeader) {
	      groupHeader = React.createElement(FixedDataTableRow, {
	        key: 'group_header',
	        className: joinClasses(cx('fixedDataTableLayout/header'), cx('public/fixedDataTable/header')),
	        data: state.groupHeaderData,
	        width: state.width,
	        height: state.groupHeaderHeight,
	        index: 0,
	        zIndex: 1,
	        offsetTop: 0,
	        scrollLeft: state.scrollX,
	        fixedColumns: state.groupHeaderFixedColumns,
	        scrollableColumns: state.groupHeaderScrollableColumns
	      });
	    }

	    var maxScrollY = this.state.maxScrollY;
	    var showScrollbarX = state.maxScrollX > 0 && state.overflowX !== 'hidden';
	    var showScrollbarY = maxScrollY > 0 && state.overflowY !== 'hidden';
	    var scrollbarXHeight = showScrollbarX ? Scrollbar.SIZE : 0;
	    var scrollbarYHeight = state.height - scrollbarXHeight - 2 * BORDER_HEIGHT - state.footerHeight;

	    var headerOffsetTop = state.useGroupHeader ? state.groupHeaderHeight : 0;
	    var bodyOffsetTop = headerOffsetTop + state.headerHeight;
	    scrollbarYHeight -= bodyOffsetTop;
	    var bottomSectionOffset = 0;
	    var footOffsetTop = props.maxHeight != null ? bodyOffsetTop + state.bodyHeight : bodyOffsetTop + scrollbarYHeight;
	    var rowsContainerHeight = footOffsetTop + state.footerHeight;

	    if (props.ownerHeight !== undefined && props.ownerHeight < state.height) {
	      bottomSectionOffset = props.ownerHeight - state.height;

	      footOffsetTop = Math.min(footOffsetTop, props.ownerHeight - state.footerHeight - scrollbarXHeight);

	      scrollbarYHeight = Math.max(0, footOffsetTop - bodyOffsetTop);
	    }

	    var verticalScrollbar;
	    if (showScrollbarY) {
	      verticalScrollbar = React.createElement(Scrollbar, {
	        size: scrollbarYHeight,
	        contentSize: scrollbarYHeight + maxScrollY,
	        onScroll: this._onVerticalScroll,
	        verticalTop: bodyOffsetTop,
	        position: state.scrollY
	      });
	    }

	    var horizontalScrollbar;
	    if (showScrollbarX) {
	      var scrollbarXWidth = state.width;
	      horizontalScrollbar = React.createElement(HorizontalScrollbar, {
	        contentSize: scrollbarXWidth + state.maxScrollX,
	        offset: bottomSectionOffset,
	        onScroll: this._onHorizontalScroll,
	        position: state.scrollX,
	        size: scrollbarXWidth
	      });
	    }

	    var dragKnob = React.createElement(FixedDataTableColumnResizeHandle, {
	      height: state.height,
	      initialWidth: state.columnResizingData.width || 0,
	      minWidth: state.columnResizingData.minWidth || 0,
	      maxWidth: state.columnResizingData.maxWidth || Number.MAX_VALUE,
	      visible: !!state.isColumnResizing,
	      leftOffset: state.columnResizingData.left || 0,
	      knobHeight: state.headerHeight,
	      initialEvent: state.columnResizingData.initialEvent,
	      onColumnResizeEnd: props.onColumnResizeEndCallback,
	      columnKey: state.columnResizingData.key
	    });

	    var footer = null;
	    if (state.footerHeight) {
	      var footerData = props.footerDataGetter ? props.footerDataGetter() : props.footerData;

	      footer = React.createElement(FixedDataTableRow, {
	        key: 'footer',
	        className: joinClasses(cx('fixedDataTableLayout/footer'), cx('public/fixedDataTable/footer')),
	        data: footerData,
	        fixedColumns: state.footFixedColumns,
	        height: state.footerHeight,
	        index: -1,
	        zIndex: 1,
	        offsetTop: footOffsetTop,
	        scrollableColumns: state.footScrollableColumns,
	        scrollLeft: state.scrollX,
	        width: state.width
	      });
	    }

	    var rows = this._renderRows(bodyOffsetTop);

	    var header = React.createElement(FixedDataTableRow, {
	      key: 'header',
	      className: joinClasses(cx('fixedDataTableLayout/header'), cx('public/fixedDataTable/header')),
	      data: state.headData,
	      width: state.width,
	      height: state.headerHeight,
	      index: -1,
	      zIndex: 1,
	      offsetTop: headerOffsetTop,
	      scrollLeft: state.scrollX,
	      fixedColumns: state.headFixedColumns,
	      scrollableColumns: state.headScrollableColumns,
	      onColumnResize: this._onColumnResize
	    });

	    var topShadow;
	    var bottomShadow;
	    if (state.scrollY) {
	      topShadow = React.createElement('div', {
	        className: joinClasses(cx('fixedDataTableLayout/topShadow'), cx('public/fixedDataTable/topShadow')),
	        style: { top: bodyOffsetTop }
	      });
	    }

	    if (state.ownerHeight != null && state.ownerHeight < state.height && state.scrollContentHeight + state.reservedHeight > state.ownerHeight || state.scrollY < maxScrollY) {
	      bottomShadow = React.createElement('div', {
	        className: joinClasses(cx('fixedDataTableLayout/bottomShadow'), cx('public/fixedDataTable/bottomShadow')),
	        style: { top: footOffsetTop }
	      });
	    }

	    return React.createElement(
	      'div',
	      {
	        className: joinClasses(cx('fixedDataTableLayout/main'), cx('public/fixedDataTable/main')),
	        onWheel: this._wheelHandler.onWheel,
	        style: { height: state.height, width: state.width } },
	      React.createElement(
	        'div',
	        {
	          className: cx('fixedDataTableLayout/rowsContainer'),
	          style: { height: rowsContainerHeight, width: state.width } },
	        dragKnob,
	        groupHeader,
	        header,
	        rows,
	        footer,
	        topShadow,
	        bottomShadow
	      ),
	      verticalScrollbar,
	      horizontalScrollbar
	    );
	  },

	  _dragDrop: function _dragDrop() {
	    this.props.onDragDrop && this.props.onDragDrop.apply(this, arguments);
	  },

	  _onDrop: function _onDrop() {
	    this.props.onDrop && this.props.onDrop.apply(this, arguments);
	  },

	  _renderRows: function _renderRows( /*number*/offsetTop) /*object*/{
	    var state = this.state;

	    return React.createElement(FixedDataTableBufferedRows, {
	      defaultRowHeight: state.rowHeight,
	      firstRowIndex: state.firstRowIndex,
	      firstRowOffset: state.firstRowOffset,
	      fixedColumns: state.bodyFixedColumns,
	      height: state.bodyHeight,
	      offsetTop: offsetTop,
	      onRowClick: state.onRowClick,
	      onRowDoubleClick: state.onRowDoubleClick,
	      onRowMouseDown: state.onRowMouseDown,
	      onRowMouseEnter: state.onRowMouseEnter,
	      onRowMouseLeave: state.onRowMouseLeave,
	      rowClassNameGetter: state.rowClassNameGetter,
	      onDragDrop: this._dragDrop,
	      onDrop: this._onDrop,
	      isSortable: this.props.isSortable,
	      rowsCount: state.rowsCount,
	      rowGetter: state.rowGetter,
	      rowHeightGetter: state.rowHeightGetter,
	      scrollLeft: state.scrollX,
	      scrollableColumns: state.bodyScrollableColumns,
	      showLastRowBorder: true,
	      width: state.width,
	      rowPositionGetter: this._scrollHelper.getRowPosition
	    });
	  },

	  /**
	   * This is called when a cell that is in the header of a column has its
	   * resizer knob clicked on. It displays the resizer and puts in the correct
	   * location on the table.
	   */
	  _onColumnResize: function _onColumnResize(
	  /*number*/combinedWidth,
	  /*number*/leftOffset,
	  /*number*/cellWidth,
	  /*?number*/cellMinWidth,
	  /*?number*/cellMaxWidth,
	  /*number|string*/columnKey,
	  /*object*/event) {
	    this.setState({
	      isColumnResizing: true,
	      columnResizingData: {
	        left: leftOffset + combinedWidth - cellWidth,
	        width: cellWidth,
	        minWidth: cellMinWidth,
	        maxWidth: cellMaxWidth,
	        initialEvent: {
	          clientX: event.clientX,
	          clientY: event.clientY,
	          preventDefault: emptyFunction
	        },
	        key: columnKey
	      }
	    });
	  },

	  _areColumnSettingsIdentical: function _areColumnSettingsIdentical(oldColumns, newColumns) {
	    if (oldColumns.length !== newColumns.length) {
	      return false;
	    }
	    for (var index = 0; index < oldColumns.length; ++index) {
	      if (!shallowEqual(oldColumns[index].props, newColumns[index].props)) {
	        return false;
	      }
	    }
	    return true;
	  },

	  _populateColumnsAndColumnData: function _populateColumnsAndColumnData(columns, columnGroups, oldState) {
	    var canReuseColumnSettings = false;
	    var canReuseColumnGroupSettings = false;

	    if (oldState && oldState.columns) {
	      canReuseColumnSettings = this._areColumnSettingsIdentical(columns, oldState.columns);
	    }
	    if (oldState && oldState.columnGroups && columnGroups) {
	      canReuseColumnGroupSettings = this._areColumnSettingsIdentical(columnGroups, oldState.columnGroups);
	    }

	    var columnInfo = {};
	    if (canReuseColumnSettings) {
	      columnInfo.bodyFixedColumns = oldState.bodyFixedColumns;
	      columnInfo.bodyScrollableColumns = oldState.bodyScrollableColumns;
	      columnInfo.headFixedColumns = oldState.headFixedColumns;
	      columnInfo.headScrollableColumns = oldState.headScrollableColumns;
	      columnInfo.footFixedColumns = oldState.footFixedColumns;
	      columnInfo.footScrollableColumns = oldState.footScrollableColumns;
	    } else {
	      var bodyColumnTypes = this._splitColumnTypes(columns);
	      columnInfo.bodyFixedColumns = bodyColumnTypes.fixed;
	      columnInfo.bodyScrollableColumns = bodyColumnTypes.scrollable;

	      var headColumnTypes = this._splitColumnTypes(this._createHeadColumns(columns));
	      columnInfo.headFixedColumns = headColumnTypes.fixed;
	      columnInfo.headScrollableColumns = headColumnTypes.scrollable;

	      var footColumnTypes = this._splitColumnTypes(this._createFootColumns(columns));
	      columnInfo.footFixedColumns = footColumnTypes.fixed;
	      columnInfo.footScrollableColumns = footColumnTypes.scrollable;
	    }

	    if (canReuseColumnGroupSettings) {
	      columnInfo.groupHeaderFixedColumns = oldState.groupHeaderFixedColumns;
	      columnInfo.groupHeaderScrollableColumns = oldState.groupHeaderScrollableColumns;
	    } else {
	      if (columnGroups) {
	        columnInfo.groupHeaderData = this._getGroupHeaderData(columnGroups);
	        columnGroups = this._createGroupHeaderColumns(columnGroups);
	        var groupHeaderColumnTypes = this._splitColumnTypes(columnGroups);
	        columnInfo.groupHeaderFixedColumns = groupHeaderColumnTypes.fixed;
	        columnInfo.groupHeaderScrollableColumns = groupHeaderColumnTypes.scrollable;
	      }
	    }

	    columnInfo.headData = this._getHeadData(columns);

	    return columnInfo;
	  },

	  _calculateState: function _calculateState( /*object*/props, /*?object*/oldState) /*object*/{
	    invariant(props.height !== undefined || props.maxHeight !== undefined, 'You must set either a height or a maxHeight');

	    var children = [];
	    ReactChildren.forEach(props.children, function (child, index) {
	      if (child == null) {
	        return;
	      }
	      invariant(child.type.__TableColumnGroup__ || child.type.__TableColumn__, 'child type should be <FixedDataTableColumn /> or ' + '<FixedDataTableColumnGroup />');
	      children.push(child);
	    });

	    var useGroupHeader = false;
	    if (children.length && children[0].type.__TableColumnGroup__) {
	      useGroupHeader = true;
	    }

	    var firstRowIndex = oldState && oldState.firstRowIndex || 0;
	    var firstRowOffset = oldState && oldState.firstRowOffset || 0;
	    var scrollX, scrollY;
	    if (oldState && props.overflowX !== 'hidden') {
	      scrollX = oldState.scrollX;
	    } else {
	      scrollX = props.scrollLeft;
	    }
	    if (oldState && props.overflowY !== 'hidden') {
	      scrollY = oldState.scrollY;
	    } else {
	      scrollState = this._scrollHelper.scrollTo(props.scrollTop);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    }

	    if (this._rowToScrollTo !== undefined) {
	      scrollState = this._scrollHelper.scrollRowIntoView(this._rowToScrollTo);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	      delete this._rowToScrollTo;
	    }

	    var groupHeaderHeight = useGroupHeader ? props.groupHeaderHeight : 0;

	    if (oldState && props.rowsCount !== oldState.rowsCount) {
	      // Number of rows changed, try to scroll to the row from before the
	      // change
	      var viewportHeight = (props.height === undefined ? props.maxHeight : props.height) - (props.headerHeight || 0) - (props.footerHeight || 0) - (props.groupHeaderHeight || 0);
	      this._scrollHelper = new FixedDataTableScrollHelper(props.rowsCount, props.rowHeight, viewportHeight, props.rowHeightGetter);
	      var scrollState = this._scrollHelper.scrollToRow(firstRowIndex, firstRowOffset);
	      firstRowIndex = scrollState.index;
	      firstRowOffset = scrollState.offset;
	      scrollY = scrollState.position;
	    } else if (oldState && props.rowHeightGetter !== oldState.rowHeightGetter) {
	      this._scrollHelper.setRowHeightGetter(props.rowHeightGetter);
	    }

	    var columnResizingData;
	    if (props.isColumnResizing) {
	      columnResizingData = oldState && oldState.columnResizingData;
	    } else {
	      columnResizingData = EMPTY_OBJECT;
	    }

	    var columns;
	    var columnGroups;

	    if (useGroupHeader) {
	      var columnGroupSettings = FixedDataTableWidthHelper.adjustColumnGroupWidths(children, props.width);
	      columns = columnGroupSettings.columns;
	      columnGroups = columnGroupSettings.columnGroups;
	    } else {
	      columns = FixedDataTableWidthHelper.adjustColumnWidths(children, props.width);
	    }

	    var columnInfo = this._populateColumnsAndColumnData(columns, columnGroups, oldState);

	    if (this._columnToScrollTo !== undefined) {
	      // If selected column is a fixed column, don't scroll
	      var fixedColumnsCount = columnInfo.bodyFixedColumns.length;
	      if (this._columnToScrollTo >= fixedColumnsCount) {
	        var totalFixedColumnsWidth = 0;
	        var i, column;
	        for (i = 0; i < columnInfo.bodyFixedColumns.length; ++i) {
	          column = columnInfo.bodyFixedColumns[i];
	          totalFixedColumnsWidth += column.props.width;
	        }

	        var scrollableColumnIndex = Math.min(this._columnToScrollTo - fixedColumnsCount, columnInfo.bodyScrollableColumns.length - 1);

	        var previousColumnsWidth = 0;
	        for (i = 0; i < scrollableColumnIndex; ++i) {
	          column = columnInfo.bodyScrollableColumns[i];
	          previousColumnsWidth += column.props.width;
	        }

	        var availableScrollWidth = props.width - totalFixedColumnsWidth;
	        var selectedColumnWidth = columnInfo.bodyScrollableColumns[scrollableColumnIndex].props.width;
	        var minAcceptableScrollPosition = previousColumnsWidth + selectedColumnWidth - availableScrollWidth;

	        if (scrollX < minAcceptableScrollPosition) {
	          scrollX = minAcceptableScrollPosition;
	        }

	        if (scrollX > previousColumnsWidth) {
	          scrollX = previousColumnsWidth;
	        }
	      }
	      delete this._columnToScrollTo;
	    }

	    var useMaxHeight = props.height === undefined;
	    var height = Math.round(useMaxHeight ? props.maxHeight : props.height);
	    var totalHeightReserved = props.footerHeight + props.headerHeight + groupHeaderHeight + 2 * BORDER_HEIGHT;
	    var bodyHeight = height - totalHeightReserved;
	    var scrollContentHeight = this._scrollHelper.getContentHeight();
	    var totalHeightNeeded = scrollContentHeight + totalHeightReserved;
	    var scrollContentWidth = FixedDataTableWidthHelper.getTotalWidth(columns);

	    var horizontalScrollbarVisible = scrollContentWidth > props.width && props.overflowX !== 'hidden';

	    if (horizontalScrollbarVisible) {
	      bodyHeight -= Scrollbar.SIZE;
	      totalHeightNeeded += Scrollbar.SIZE;
	      totalHeightReserved += Scrollbar.SIZE;
	    }

	    var maxScrollX = Math.max(0, scrollContentWidth - props.width);
	    var maxScrollY = Math.max(0, scrollContentHeight - bodyHeight);
	    scrollX = Math.min(scrollX, maxScrollX);
	    scrollY = Math.min(scrollY, maxScrollY);

	    if (!maxScrollY) {
	      // no vertical scrollbar necessary, use the totals we tracked so we
	      // can shrink-to-fit vertically
	      if (useMaxHeight) {
	        height = totalHeightNeeded;
	      }
	      bodyHeight = totalHeightNeeded - totalHeightReserved;
	    }

	    this._scrollHelper.setViewportHeight(bodyHeight);

	    // The order of elements in this object metters and bringing bodyHeight,
	    // height or useGroupHeader to the top can break various features
	    var newState = _extends({
	      isColumnResizing: oldState && oldState.isColumnResizing
	    }, columnInfo, props, {

	      columns: columns,
	      columnGroups: columnGroups,
	      columnResizingData: columnResizingData,
	      firstRowIndex: firstRowIndex,
	      firstRowOffset: firstRowOffset,
	      horizontalScrollbarVisible: horizontalScrollbarVisible,
	      maxScrollX: maxScrollX,
	      maxScrollY: maxScrollY,
	      reservedHeight: totalHeightReserved,
	      scrollContentHeight: scrollContentHeight,
	      scrollX: scrollX,
	      scrollY: scrollY,

	      // These properties may overwrite properties defined in
	      // columnInfo and props
	      bodyHeight: bodyHeight,
	      height: height,
	      groupHeaderHeight: groupHeaderHeight,
	      useGroupHeader: useGroupHeader
	    });

	    // Both `headData` and `groupHeaderData` are generated by
	    // `FixedDataTable` will be passed to each header cell to render.
	    // In order to prevent over-rendering the cells, we do not pass the
	    // new `headData` or `groupHeaderData`
	    // if they haven't changed.
	    if (oldState) {
	      if (oldState.headData && newState.headData && shallowEqual(oldState.headData, newState.headData)) {
	        newState.headData = oldState.headData;
	      }
	      if (oldState.groupHeaderData && newState.groupHeaderData && shallowEqual(oldState.groupHeaderData, newState.groupHeaderData)) {
	        newState.groupHeaderData = oldState.groupHeaderData;
	      }
	    }

	    return newState;
	  },

	  _createGroupHeaderColumns: function _createGroupHeaderColumns( /*array*/columnGroups) /*array*/{
	    var newColumnGroups = [];
	    for (var i = 0; i < columnGroups.length; ++i) {
	      newColumnGroups[i] = React.cloneElement(columnGroups[i], {
	        dataKey: i,
	        children: undefined,
	        columnData: columnGroups[i].props.columnGroupData,
	        cellRenderer: columnGroups[i].props.groupHeaderRenderer || renderToString,
	        isHeaderCell: true
	      });
	    }
	    return newColumnGroups;
	  },

	  _createHeadColumns: function _createHeadColumns( /*array*/columns) /*array*/{
	    var headColumns = [];
	    for (var i = 0; i < columns.length; ++i) {
	      var columnProps = columns[i].props;
	      headColumns.push(React.cloneElement(columns[i], {
	        cellRenderer: columnProps.headerRenderer || renderToString,
	        columnData: columnProps.columnData,
	        dataKey: columnProps.dataKey,
	        isHeaderCell: true,
	        label: columnProps.label
	      }));
	    }
	    return headColumns;
	  },

	  _createFootColumns: function _createFootColumns( /*array*/columns) /*array*/{
	    var footColumns = [];
	    for (var i = 0; i < columns.length; ++i) {
	      var columnProps = columns[i].props;
	      footColumns.push(React.cloneElement(columns[i], {
	        cellRenderer: columnProps.footerRenderer || renderToString,
	        columnData: columnProps.columnData,
	        dataKey: columnProps.dataKey,
	        isFooterCell: true
	      }));
	    }
	    return footColumns;
	  },

	  _getHeadData: function _getHeadData( /*array*/columns) /*?object*/{
	    if (!this.props.headerDataGetter) {
	      return null;
	    }

	    var headData = {};
	    for (var i = 0; i < columns.length; ++i) {
	      var columnProps = columns[i].props;
	      headData[columnProps.dataKey] = this.props.headerDataGetter(columnProps.dataKey);
	    }
	    return headData;
	  },

	  _getGroupHeaderData: function _getGroupHeaderData( /*array*/columnGroups) /*array*/{
	    var groupHeaderData = [];
	    for (var i = 0; i < columnGroups.length; ++i) {
	      groupHeaderData[i] = columnGroups[i].props.label || '';
	    }
	    return groupHeaderData;
	  },

	  _splitColumnTypes: function _splitColumnTypes( /*array*/columns) /*object*/{
	    var fixedColumns = [];
	    var scrollableColumns = [];
	    for (var i = 0; i < columns.length; ++i) {
	      if (columns[i].props.fixed) {
	        fixedColumns.push(columns[i]);
	      } else {
	        scrollableColumns.push(columns[i]);
	      }
	    }
	    return {
	      fixed: fixedColumns,
	      scrollable: scrollableColumns
	    };
	  },

	  _onWheel: function _onWheel( /*number*/deltaX, /*number*/deltaY) {
	    if (this.isMounted()) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      var x = this.state.scrollX;
	      if (Math.abs(deltaY) > Math.abs(deltaX) && this.props.overflowY !== 'hidden') {
	        var scrollState = this._scrollHelper.scrollBy(Math.round(deltaY));
	        var maxScrollY = Math.max(0, scrollState.contentHeight - this.state.bodyHeight);
	        this.setState({
	          firstRowIndex: scrollState.index,
	          firstRowOffset: scrollState.offset,
	          scrollY: scrollState.position,
	          scrollContentHeight: scrollState.contentHeight,
	          maxScrollY: maxScrollY
	        });
	      } else if (deltaX && this.props.overflowX !== 'hidden') {
	        x += deltaX;
	        x = x < 0 ? 0 : x;
	        x = x > this.state.maxScrollX ? this.state.maxScrollX : x;
	        this.setState({
	          scrollX: x
	        });
	      }

	      this._didScrollStop();
	    }
	  },

	  _onHorizontalScroll: function _onHorizontalScroll( /*number*/scrollPos) {
	    if (this.isMounted() && scrollPos !== this.state.scrollX) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      this.setState({
	        scrollX: scrollPos
	      });
	      this._didScrollStop();
	    }
	  },

	  _onVerticalScroll: function _onVerticalScroll( /*number*/scrollPos) {
	    if (this.isMounted() && scrollPos !== this.state.scrollY) {
	      if (!this._isScrolling) {
	        this._didScrollStart();
	      }
	      var scrollState = this._scrollHelper.scrollTo(Math.round(scrollPos));
	      this.setState({
	        firstRowIndex: scrollState.index,
	        firstRowOffset: scrollState.offset,
	        scrollY: scrollState.position,
	        scrollContentHeight: scrollState.contentHeight
	      });
	      this._didScrollStop();
	    }
	  },

	  _didScrollStart: function _didScrollStart() {
	    if (this.isMounted() && !this._isScrolling) {
	      this._isScrolling = true;
	      if (this.props.onScrollStart) {
	        this.props.onScrollStart(this.state.scrollX, this.state.scrollY);
	      }
	    }
	  },

	  _didScrollStop: function _didScrollStop() {
	    if (this.isMounted() && this._isScrolling) {
	      this._isScrolling = false;
	      if (this.props.onScrollEnd) {
	        this.props.onScrollEnd(this.state.scrollX, this.state.scrollY);
	      }
	    }
	  }
	});

	var HorizontalScrollbar = React.createClass({
	  displayName: 'HorizontalScrollbar',

	  mixins: [ReactComponentWithPureRenderMixin],
	  propTypes: {
	    contentSize: PropTypes.number.isRequired,
	    offset: PropTypes.number.isRequired,
	    onScroll: PropTypes.func.isRequired,
	    position: PropTypes.number.isRequired,
	    size: PropTypes.number.isRequired
	  },

	  render: function render() /*object*/{
	    var outerContainerStyle = {
	      height: Scrollbar.SIZE,
	      width: this.props.size
	    };
	    var innerContainerStyle = {
	      height: Scrollbar.SIZE,
	      position: 'absolute',
	      overflow: 'hidden',
	      width: this.props.size
	    };
	    translateDOMPositionXY(innerContainerStyle, 0, this.props.offset);

	    return React.createElement(
	      'div',
	      {
	        className: joinClasses(cx('fixedDataTableLayout/horizontalScrollbar'), cx('public/fixedDataTable/horizontalScrollbar')),
	        style: outerContainerStyle },
	      React.createElement(
	        'div',
	        { style: innerContainerStyle },
	        React.createElement(Scrollbar, _extends({}, this.props, {
	          isOpaque: true,
	          orientation: 'horizontal',
	          offset: undefined
	        }))
	      )
	    );
	  }
	});

	module.exports = FixedDataTable;
	// isColumnResizing should be overwritten by value from props if
	// avaialble

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableHelper
	 * @typechecks
	 */

	'use strict';

	var Locale = __webpack_require__(28);
	var React = __webpack_require__(29);
	var FixedDataTableColumnGroup = __webpack_require__(31);
	var FixedDataTableColumn = __webpack_require__(32);

	var DIR_SIGN = Locale.isRTL() ? -1 : +1;
	// A cell up to 5px outside of the visible area will still be considered visible
	var CELL_VISIBILITY_TOLERANCE = 5; // used for flyouts

	function renderToString(value) /*string*/{
	  if (value === null || value === undefined) {
	    return '';
	  } else {
	    return String(value);
	  }
	}

	/**
	 * Helper method to execute a callback against all columns given the children
	 * of a table.
	 * @param {?object|array} children
	 *    Children of a table.
	 * @param {function} callback
	 *    Function to excecute for each column. It is passed the column.
	 */
	function forEachColumn(children, callback) {
	  React.Children.forEach(children, function (child) {
	    if (child.type === FixedDataTableColumnGroup) {
	      forEachColumn(child.props.children, callback);
	    } else if (child.type === FixedDataTableColumn) {
	      callback(child);
	    }
	  });
	}

	/**
	 * Helper method to map columns to new columns. This takes into account column
	 * groups and will generate a new column group if its columns change.
	 * @param {?object|array} children
	 *    Children of a table.
	 * @param {function} callback
	 *    Function to excecute for each column. It is passed the column and should
	 *    return a result column.
	 */
	function mapColumns(children, callback) {
	  var newChildren = [];
	  React.Children.forEach(children, function (originalChild) {
	    var newChild = originalChild;

	    // The child is either a column group or a column. If it is a column group
	    // we need to iterate over its columns and then potentially generate a
	    // new column group
	    if (originalChild.type === FixedDataTableColumnGroup) {
	      var haveColumnsChanged = false;
	      var newColumns = [];

	      forEachColumn(originalChild.props.children, function (originalcolumn) {
	        var newColumn = callback(originalcolumn);
	        if (newColumn !== originalcolumn) {
	          haveColumnsChanged = true;
	        }
	        newColumns.push(newColumn);
	      });

	      // If the column groups columns have changed clone the group and supply
	      // new children
	      if (haveColumnsChanged) {
	        newChild = React.cloneElement(originalChild, {
	          children: newColumns
	        });
	      }
	    } else if (originalChild.type === FixedDataTableColumn) {
	      newChild = callback(originalChild);
	    }

	    newChildren.push(newChild);
	  });

	  return newChildren;
	}

	var FixedDataTableHelper = {
	  DIR_SIGN: DIR_SIGN,
	  CELL_VISIBILITY_TOLERANCE: CELL_VISIBILITY_TOLERANCE,
	  renderToString: renderToString,
	  forEachColumn: forEachColumn,
	  mapColumns: mapColumns
	};

	module.exports = FixedDataTableHelper;

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Locale
	 */

	"use strict";

	// Hard code this for now.
	var Locale = {
	  isRTL: function isRTL() {
	    return false;
	  },
	  getDirection: function getDirection() {
	    return 'LTR';
	  }
	};

	module.exports = Locale;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */

	'use strict';

	module.exports = __webpack_require__(30);

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumnGroup.react
	 * @typechecks
	 */

	'use strict';

	var React = __webpack_require__(29);

	var PropTypes = React.PropTypes;

	/**
	 * Component that defines the attributes of a table column group.
	 */
	var FixedDataTableColumnGroup = React.createClass({
	  displayName: 'FixedDataTableColumnGroup',

	  statics: {
	    __TableColumnGroup__: true
	  },

	  propTypes: {
	    /**
	     * The horizontal alignment of the table cell content.
	     */
	    align: PropTypes.oneOf(['left', 'center', 'right']),

	    /**
	     * Controls if the column group is fixed when scrolling in the X axis.
	     */
	    fixed: PropTypes.bool,

	    /**
	     * Bucket for any data to be passed into column group renderer functions.
	     */
	    columnGroupData: PropTypes.object,

	    /**
	     * The column group's header label.
	     */
	    label: PropTypes.string,

	    /**
	     * The cell renderer that returns React-renderable content for a table
	     * column group header. If it's not specified, the label from props will
	     * be rendered as header content.
	     * ```
	     * function(
	     *   label: ?string,
	     *   cellDataKey: string,
	     *   columnGroupData: any,
	     *   rowData: array<?object>, // array of labels of all columnGroups
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    groupHeaderRenderer: PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      fixed: false
	    };
	  },

	  render: function render() {
	    if (true) {
	      throw new Error('Component <FixedDataTableColumnGroup /> should never render');
	    }
	    return null;
	  }
	});

	module.exports = FixedDataTableColumnGroup;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableColumn.react
	 * @typechecks
	 */

	'use strict';

	var React = __webpack_require__(29);

	var PropTypes = React.PropTypes;

	/**
	 * Component that defines the attributes of table column.
	 */
	var FixedDataTableColumn = React.createClass({
	  displayName: 'FixedDataTableColumn',

	  statics: {
	    __TableColumn__: true
	  },

	  propTypes: {
	    /**
	     * The horizontal alignment of the table cell content.
	     */
	    align: PropTypes.oneOf(['left', 'center', 'right']),

	    /**
	     * className for this column's header cell.
	     */
	    headerClassName: PropTypes.string,

	    /**
	     * className for this column's footer cell.
	     */
	    footerClassName: PropTypes.string,

	    /**
	     * className for each of this column's data cells.
	     */
	    cellClassName: PropTypes.string,

	    /**
	     * The cell renderer that returns React-renderable content for table cell.
	     * ```
	     * function(
	     *   cellData: any,
	     *   cellDataKey: string,
	     *   rowData: object,
	     *   rowIndex: number,
	     *   columnData: any,
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    cellRenderer: PropTypes.func,

	    /**
	     * The getter `function(string_cellDataKey, object_rowData)` that returns
	     * the cell data for the `cellRenderer`.
	     * If not provided, the cell data will be collected from
	     * `rowData[cellDataKey]` instead. The value that `cellDataGetter` returns
	     * will be used to determine whether the cell should re-render.
	     */
	    cellDataGetter: PropTypes.func,

	    /**
	     * The key to retrieve the cell data from the data row. Provided key type
	     * must be either `string` or `number`. Since we use this
	     * for keys, it must be specified for each column.
	     */
	    dataKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

	    /**
	     * Controls if the column is fixed when scrolling in the X axis.
	     */
	    fixed: PropTypes.bool,

	    /**
	     * The cell renderer that returns React-renderable content for table column
	     * header.
	     * ```
	     * function(
	     *   label: ?string,
	     *   cellDataKey: string,
	     *   columnData: any,
	     *   rowData: array<?object>,
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    headerRenderer: PropTypes.func,

	    /**
	     * The cell renderer that returns React-renderable content for table column
	     * footer.
	     * ```
	     * function(
	     *   label: ?string,
	     *   cellDataKey: string,
	     *   columnData: any,
	     *   rowData: array<?object>,
	     *   width: number
	     * ): ?$jsx
	     * ```
	     */
	    footerRenderer: PropTypes.func,

	    /**
	     * Bucket for any data to be passed into column renderer functions.
	     */
	    columnData: PropTypes.object,

	    /**
	     * The column's header label.
	     */
	    label: PropTypes.string,

	    /**
	     * The pixel width of the column.
	     */
	    width: PropTypes.number.isRequired,

	    /**
	     * If this is a resizable column this is its minimum pixel width.
	     */
	    minWidth: PropTypes.number,

	    /**
	     * If this is a resizable column this is its maximum pixel width.
	     */
	    maxWidth: PropTypes.number,

	    /**
	     * The grow factor relative to other columns. Same as the flex-grow API
	     * from http://www.w3.org/TR/css3-flexbox/. Basically, take any available
	     * extra width and distribute it proportionally according to all columns'
	     * flexGrow values. Defaults to zero (no-flexing).
	     */
	    flexGrow: PropTypes.number,

	    /**
	     * Whether the column can be resized with the
	     * FixedDataTableColumnResizeHandle. Please note that if a column
	     * has a flex grow, once you resize the column this will be set to 0.
	     *
	     * This property only provides the UI for the column resizing. If this
	     * is set to true, you will need ot se the onColumnResizeEndCallback table
	     * property and render your columns appropriately.
	     */
	    isResizable: PropTypes.bool,

	    /**
	     * Experimental feature
	     * Whether cells in this column can be removed from document when outside
	     * of viewport as a result of horizontal scrolling.
	     * Setting this property to true allows the table to not render cells in
	     * particular column that are outside of viewport for visible rows. This
	     * allows to create table with many columns and not have vertical scrolling
	     * performance drop.
	     * Setting the property to false will keep previous behaviour and keep
	     * cell rendered if the row it belongs to is visible.
	     */
	    allowCellsRecycling: PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      allowCellsRecycling: false,
	      fixed: false
	    };
	  },

	  render: function render() {
	    if (true) {
	      throw new Error('Component <FixedDataTableColumn /> should never render');
	    }
	    return null;
	  }
	});

	module.exports = FixedDataTableColumn;

/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	  var key;
	  // Test for A's keys different from B.
	  for (key in objA) {
	    if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
	      return false;
	    }
	  }
	  // Test for B's keys missing from A.
	  for (key in objB) {
	    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is utility that hanlds onWheel events and calls provided wheel
	 * callback with correct frame rate.
	 *
	 * @providesModule ReactWheelHandler
	 * @typechecks
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var emptyFunction = __webpack_require__(35);
	var normalizeWheel = __webpack_require__(36);
	var requestAnimationFramePolyfill = __webpack_require__(40);

	var ReactWheelHandler = (function () {
	  /**
	   * onWheel is the callback that will be called with right frame rate if
	   * any wheel events happened
	   * onWheel should is to be called with two arguments: deltaX and deltaY in
	   * this order
	   */

	  function ReactWheelHandler(
	  /*function*/onWheel,
	  /*boolean|function*/handleScrollX,
	  /*boolean|function*/handleScrollY,
	  /*?boolean|?function*/stopPropagation) {
	    _classCallCheck(this, ReactWheelHandler);

	    this._animationFrameID = null;
	    this._deltaX = 0;
	    this._deltaY = 0;
	    this._didWheel = this._didWheel.bind(this);
	    if (typeof handleScrollX !== 'function') {
	      handleScrollX = handleScrollX ? emptyFunction.thatReturnsTrue : emptyFunction.thatReturnsFalse;
	    }

	    if (typeof handleScrollY !== 'function') {
	      handleScrollY = handleScrollY ? emptyFunction.thatReturnsTrue : emptyFunction.thatReturnsFalse;
	    }

	    if (typeof stopPropagation !== 'function') {
	      stopPropagation = stopPropagation ? emptyFunction.thatReturnsTrue : emptyFunction.thatReturnsFalse;
	    }

	    this._handleScrollX = handleScrollX;
	    this._handleScrollY = handleScrollY;
	    this._stopPropagation = stopPropagation;
	    this._onWheelCallback = onWheel;
	    this.onWheel = this.onWheel.bind(this);
	  }

	  _createClass(ReactWheelHandler, [{
	    key: 'onWheel',
	    value: function onWheel( /*object*/event) {
	      var normalizedEvent = normalizeWheel(event);
	      var deltaX = this._deltaX + normalizedEvent.pixelX;
	      var deltaY = this._deltaY + normalizedEvent.pixelY;
	      var handleScrollX = this._handleScrollX(deltaX, deltaY);
	      var handleScrollY = this._handleScrollY(deltaY, deltaX);
	      if (!handleScrollX && !handleScrollY) {
	        return;
	      }

	      this._deltaX += handleScrollX ? normalizedEvent.pixelX : 0;
	      this._deltaY += handleScrollY ? normalizedEvent.pixelY : 0;
	      event.preventDefault();

	      var changed;
	      if (this._deltaX !== 0 || this._deltaY !== 0) {
	        if (this._stopPropagation()) {
	          event.stopPropagation();
	        }
	        changed = true;
	      }

	      if (changed === true && this._animationFrameID === null) {
	        this._animationFrameID = requestAnimationFramePolyfill(this._didWheel);
	      }
	    }
	  }, {
	    key: '_didWheel',
	    value: function _didWheel() {
	      this._animationFrameID = null;
	      this._onWheelCallback(this._deltaX, this._deltaY);
	      this._deltaX = 0;
	      this._deltaY = 0;
	    }
	  }]);

	  return ReactWheelHandler;
	})();

	module.exports = ReactWheelHandler;

/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */

	"use strict";

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule normalizeWheel
	 * @typechecks
	 */

	'use strict';

	var UserAgent_DEPRECATED = __webpack_require__(37);

	var isEventSupported = __webpack_require__(38);

	// Reasonable defaults
	var PIXEL_STEP = 10;
	var LINE_HEIGHT = 40;
	var PAGE_HEIGHT = 800;

	/**
	 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
	 * complicated, thus this doc is long and (hopefully) detailed enough to answer
	 * your questions.
	 *
	 * If you need to react to the mouse wheel in a predictable way, this code is
	 * like your bestest friend. * hugs *
	 *
	 * As of today, there are 4 DOM event types you can listen to:
	 *
	 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
	 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
	 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
	 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
	 *
	 * So what to do?  The is the best:
	 *
	 *   normalizeWheel.getEventType();
	 *
	 * In your event callback, use this code to get sane interpretation of the
	 * deltas.  This code will return an object with properties:
	 *
	 *   spinX   -- normalized spin speed (use for zoom) - x plane
	 *   spinY   -- " - y plane
	 *   pixelX  -- normalized distance (to pixels) - x plane
	 *   pixelY  -- " - y plane
	 *
	 * Wheel values are provided by the browser assuming you are using the wheel to
	 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
	 * significantly on different platforms and browsers, forgetting that you can
	 * scroll at different speeds.  Some devices (like trackpads) emit more events
	 * at smaller increments with fine granularity, and some emit massive jumps with
	 * linear speed or acceleration.
	 *
	 * This code does its best to normalize the deltas for you:
	 *
	 *   - spin is trying to normalize how far the wheel was spun (or trackpad
	 *     dragged).  This is super useful for zoom support where you want to
	 *     throw away the chunky scroll steps on the PC and make those equal to
	 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
	 *     resolve a single slow step on a wheel to 1.
	 *
	 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
	 *     get the crazy differences between browsers, but at least it'll be in
	 *     pixels!
	 *
	 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
	 *     should translate to positive value zooming IN, negative zooming OUT.
	 *     This matches the newer 'wheel' event.
	 *
	 * Why are there spinX, spinY (or pixels)?
	 *
	 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
	 *     with a mouse.  It results in side-scrolling in the browser by default.
	 *
	 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
	 *
	 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
	 *     probably is by browsers in conjunction with fancy 3D controllers .. but
	 *     you know.
	 *
	 * Implementation info:
	 *
	 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
	 * average mouse:
	 *
	 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
	 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
	 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
	 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
	 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
	 *
	 * On the trackpad:
	 *
	 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
	 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
	 *
	 * On other/older browsers.. it's more complicated as there can be multiple and
	 * also missing delta values.
	 *
	 * The 'wheel' event is more standard:
	 *
	 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
	 *
	 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
	 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
	 * backward compatibility with older events.  Those other values help us
	 * better normalize spin speed.  Example of what the browsers provide:
	 *
	 *                          | event.wheelDelta | event.detail
	 *        ------------------+------------------+--------------
	 *          Safari v5/OS X  |       -120       |       0
	 *          Safari v5/Win7  |       -120       |       0
	 *         Chrome v17/OS X  |       -120       |       0
	 *         Chrome v17/Win7  |       -120       |       0
	 *                IE9/Win7  |       -120       |   undefined
	 *         Firefox v4/OS X  |     undefined    |       1
	 *         Firefox v4/Win7  |     undefined    |       3
	 *
	 */
	function normalizeWheel( /*object*/event) /*object*/{
	  var sX = 0,
	      sY = 0,
	      // spinX, spinY
	  pX = 0,
	      pY = 0; // pixelX, pixelY

	  // Legacy
	  if ('detail' in event) {
	    sY = event.detail;
	  }
	  if ('wheelDelta' in event) {
	    sY = -event.wheelDelta / 120;
	  }
	  if ('wheelDeltaY' in event) {
	    sY = -event.wheelDeltaY / 120;
	  }
	  if ('wheelDeltaX' in event) {
	    sX = -event.wheelDeltaX / 120;
	  }

	  // side scrolling on FF with DOMMouseScroll
	  if ('axis' in event && event.axis === event.HORIZONTAL_AXIS) {
	    sX = sY;
	    sY = 0;
	  }

	  pX = sX * PIXEL_STEP;
	  pY = sY * PIXEL_STEP;

	  if ('deltaY' in event) {
	    pY = event.deltaY;
	  }
	  if ('deltaX' in event) {
	    pX = event.deltaX;
	  }

	  if ((pX || pY) && event.deltaMode) {
	    if (event.deltaMode == 1) {
	      // delta in LINE units
	      pX *= LINE_HEIGHT;
	      pY *= LINE_HEIGHT;
	    } else {
	      // delta in PAGE units
	      pX *= PAGE_HEIGHT;
	      pY *= PAGE_HEIGHT;
	    }
	  }

	  // Fall-back if spin cannot be determined
	  if (pX && !sX) {
	    sX = pX < 1 ? -1 : 1;
	  }
	  if (pY && !sY) {
	    sY = pY < 1 ? -1 : 1;
	  }

	  return { spinX: sX,
	    spinY: sY,
	    pixelX: pX,
	    pixelY: pY };
	}

	/**
	 * The best combination if you prefer spinX + spinY normalization.  It favors
	 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
	 * 'wheel' event, making spin speed determination impossible.
	 */
	normalizeWheel.getEventType = function () /*string*/{
	  return UserAgent_DEPRECATED.firefox() ? 'DOMMouseScroll' : isEventSupported('wheel') ? 'wheel' : 'mousewheel';
	};

	module.exports = normalizeWheel;

/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Copyright 2004-present Facebook. All Rights Reserved.
	 *
	 * @providesModule UserAgent_DEPRECATED
	 */

	/**
	 *  Provides entirely client-side User Agent and OS detection. You should prefer
	 *  the non-deprecated UserAgent module when possible, which exposes our
	 *  authoritative server-side PHP-based detection to the client.
	 *
	 *  Usage is straightforward:
	 *
	 *    if (UserAgent_DEPRECATED.ie()) {
	 *      //  IE
	 *    }
	 *
	 *  You can also do version checks:
	 *
	 *    if (UserAgent_DEPRECATED.ie() >= 7) {
	 *      //  IE7 or better
	 *    }
	 *
	 *  The browser functions will return NaN if the browser does not match, so
	 *  you can also do version compares the other way:
	 *
	 *    if (UserAgent_DEPRECATED.ie() < 7) {
	 *      //  IE6 or worse
	 *    }
	 *
	 *  Note that the version is a float and may include a minor version number,
	 *  so you should always use range operators to perform comparisons, not
	 *  strict equality.
	 *
	 *  **Note:** You should **strongly** prefer capability detection to browser
	 *  version detection where it's reasonable:
	 *
	 *    http://www.quirksmode.org/js/support.html
	 *
	 *  Further, we have a large number of mature wrapper functions and classes
	 *  which abstract away many browser irregularities. Check the documentation,
	 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
	 *  another copy of "event || window.event".
	 *
	 */

	'use strict';

	var _populated = false;

	// Browsers
	var _ie, _firefox, _opera, _webkit, _chrome;

	// Actual IE browser for compatibility mode
	var _ie_real_version;

	// Platforms
	var _osx, _windows, _linux, _android;

	// Architectures
	var _win64;

	// Devices
	var _iphone, _ipad, _native;

	var _mobile;

	function _populate() {
	  if (_populated) {
	    return;
	  }

	  _populated = true;

	  // To work around buggy JS libraries that can't handle multi-digit
	  // version numbers, Opera 10's user agent string claims it's Opera
	  // 9, then later includes a Version/X.Y field:
	  //
	  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
	  var uas = navigator.userAgent;
	  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
	  var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

	  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
	  _ipad = /\b(iP[ao]d)/.exec(uas);
	  _android = /Android/i.exec(uas);
	  _native = /FBAN\/\w+;/i.exec(uas);
	  _mobile = /Mobile/i.exec(uas);

	  // Note that the IE team blog would have you believe you should be checking
	  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
	  // from either x64 or ia64;  so ultimately, you should just check for Win64
	  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
	  // Windows will send 'WOW64' instead.
	  _win64 = !!/Win64/.exec(uas);

	  if (agent) {
	    _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
	    // IE compatibility mode
	    if (_ie && document && document.documentMode) {
	      _ie = document.documentMode;
	    }
	    // grab the "true" ie version from the trident token if available
	    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
	    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

	    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
	    _opera = agent[3] ? parseFloat(agent[3]) : NaN;
	    _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
	    if (_webkit) {
	      // We do not add the regexp to the above test, because it will always
	      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
	      // the userAgent string.
	      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
	      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
	    } else {
	      _chrome = NaN;
	    }
	  } else {
	    _ie = _firefox = _opera = _chrome = _webkit = NaN;
	  }

	  if (os) {
	    if (os[1]) {
	      // Detect OS X version.  If no version number matches, set _osx to true.
	      // Version examples:  10, 10_6_1, 10.7
	      // Parses version number as a float, taking only first two sets of
	      // digits.  If only one set of digits is found, returns just the major
	      // version number.
	      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

	      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
	    } else {
	      _osx = false;
	    }
	    _windows = !!os[2];
	    _linux = !!os[3];
	  } else {
	    _osx = _windows = _linux = false;
	  }
	}

	var UserAgent_DEPRECATED = {

	  /**
	   *  Check if the UA is Internet Explorer.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  ie: function ie() {
	    return _populate() || _ie;
	  },

	  /**
	   * Check if we're in Internet Explorer compatibility mode.
	   *
	   * @return bool true if in compatibility mode, false if
	   * not compatibility mode or not ie
	   */
	  ieCompatibilityMode: function ieCompatibilityMode() {
	    return _populate() || _ie_real_version > _ie;
	  },

	  /**
	   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
	   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
	   * this when we don't need it -- tracked by #601957.
	   */
	  ie64: function ie64() {
	    return UserAgent_DEPRECATED.ie() && _win64;
	  },

	  /**
	   *  Check if the UA is Firefox.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  firefox: function firefox() {
	    return _populate() || _firefox;
	  },

	  /**
	   *  Check if the UA is Opera.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  opera: function opera() {
	    return _populate() || _opera;
	  },

	  /**
	   *  Check if the UA is WebKit.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  webkit: function webkit() {
	    return _populate() || _webkit;
	  },

	  /**
	   *  For Push
	   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
	   */
	  safari: function safari() {
	    return UserAgent_DEPRECATED.webkit();
	  },

	  /**
	   *  Check if the UA is a Chrome browser.
	   *
	   *
	   *  @return float|NaN Version number (if match) or NaN.
	   */
	  chrome: function chrome() {
	    return _populate() || _chrome;
	  },

	  /**
	   *  Check if the user is running Windows.
	   *
	   *  @return bool `true' if the user's OS is Windows.
	   */
	  windows: function windows() {
	    return _populate() || _windows;
	  },

	  /**
	   *  Check if the user is running Mac OS X.
	   *
	   *  @return float|bool   Returns a float if a version number is detected,
	   *                       otherwise true/false.
	   */
	  osx: function osx() {
	    return _populate() || _osx;
	  },

	  /**
	   * Check if the user is running Linux.
	   *
	   * @return bool `true' if the user's OS is some flavor of Linux.
	   */
	  linux: function linux() {
	    return _populate() || _linux;
	  },

	  /**
	   * Check if the user is running on an iPhone or iPod platform.
	   *
	   * @return bool `true' if the user is running some flavor of the
	   *    iPhone OS.
	   */
	  iphone: function iphone() {
	    return _populate() || _iphone;
	  },

	  mobile: function mobile() {
	    return _populate() || (_iphone || _ipad || _android || _mobile);
	  },

	  nativeApp: function nativeApp() {
	    // webviews inside of the native apps
	    return _populate() || _native;
	  },

	  android: function android() {
	    return _populate() || _android;
	  },

	  ipad: function ipad() {
	    return _populate() || _ipad;
	  }
	};

	module.exports = UserAgent_DEPRECATED;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(39);

	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}

	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }

	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = (eventName in document);

	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}

	module.exports = isEventSupported;

/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */

	/*jslint evil: true */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule requestAnimationFramePolyfill
	 */

	'use strict';

	var emptyFunction = __webpack_require__(35);
	var nativeRequestAnimationFrame = __webpack_require__(41);

	var lastTime = 0;

	/**
	 * Here is the native and polyfill version of requestAnimationFrame.
	 * Please don't use it directly and use requestAnimationFrame module instead.
	 */
	var requestAnimationFrame = nativeRequestAnimationFrame || function (callback) {
	  var currTime = Date.now();
	  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
	  lastTime = currTime + timeDelay;
	  return global.setTimeout(function () {
	    callback(Date.now());
	  }, timeDelay);
	};

	// Works around a rare bug in Safari 6 where the first request is never invoked.
	requestAnimationFrame(emptyFunction);

	module.exports = requestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule nativeRequestAnimationFrame
	 */

	"use strict";

	var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;

	module.exports = nativeRequestAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Scrollbar.react
	 * @typechecks
	 */

	'use strict';

	var DOMMouseMoveTracker = __webpack_require__(43);
	var Keys = __webpack_require__(46);
	var React = __webpack_require__(29);
	var ReactComponentWithPureRenderMixin = __webpack_require__(33);
	var ReactWheelHandler = __webpack_require__(34);

	var cssVar = __webpack_require__(47);
	var cx = __webpack_require__(48);
	var emptyFunction = __webpack_require__(35);
	var translateDOMPositionXY = __webpack_require__(49);

	var PropTypes = React.PropTypes;

	var UNSCROLLABLE_STATE = {
	  position: 0,
	  scrollable: false
	};

	var FACE_MARGIN = parseInt(cssVar('scrollbar-face-margin'), 10);
	var FACE_MARGIN_2 = FACE_MARGIN * 2;
	var FACE_SIZE_MIN = 30;
	var KEYBOARD_SCROLL_AMOUNT = 40;

	var _lastScrolledScrollbar = null;

	var Scrollbar = React.createClass({
	  displayName: 'Scrollbar',

	  mixins: [ReactComponentWithPureRenderMixin],

	  propTypes: {
	    contentSize: PropTypes.number.isRequired,
	    defaultPosition: PropTypes.number,
	    isOpaque: PropTypes.bool,
	    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
	    onScroll: PropTypes.func,
	    position: PropTypes.number,
	    size: PropTypes.number.isRequired,
	    trackColor: PropTypes.oneOf(['gray']),
	    zIndex: PropTypes.number,
	    verticalTop: PropTypes.number
	  },

	  getInitialState: function getInitialState() /*object*/{
	    var props = this.props;
	    return this._calculateState(props.position || props.defaultPosition || 0, props.size, props.contentSize, props.orientation);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    var controlledPosition = nextProps.position;
	    if (controlledPosition === undefined) {
	      this._setNextState(this._calculateState(this.state.position, nextProps.size, nextProps.contentSize, nextProps.orientation));
	    } else {
	      this._setNextState(this._calculateState(controlledPosition, nextProps.size, nextProps.contentSize, nextProps.orientation), nextProps);
	    }
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      defaultPosition: 0,
	      isOpaque: false,
	      onScroll: emptyFunction,
	      orientation: 'vertical',
	      zIndex: 99
	    };
	  },

	  render: function render() /*?object*/{
	    if (!this.state.scrollable) {
	      return null;
	    }

	    var size = this.props.size;
	    var mainStyle;
	    var faceStyle;
	    var isHorizontal = this.state.isHorizontal;
	    var isVertical = !isHorizontal;
	    var isActive = this.state.focused || this.state.isDragging;
	    var faceSize = this.state.faceSize;
	    var isOpaque = this.props.isOpaque;
	    var verticalTop = this.props.verticalTop || 0;

	    var mainClassName = cx({
	      'ScrollbarLayout/main': true,
	      'ScrollbarLayout/mainVertical': isVertical,
	      'ScrollbarLayout/mainHorizontal': isHorizontal,
	      'public/Scrollbar/main': true,
	      'public/Scrollbar/mainOpaque': isOpaque,
	      'public/Scrollbar/mainActive': isActive
	    });

	    var faceClassName = cx({
	      'ScrollbarLayout/face': true,
	      'ScrollbarLayout/faceHorizontal': isHorizontal,
	      'ScrollbarLayout/faceVertical': isVertical,
	      'public/Scrollbar/faceActive': isActive,
	      'public/Scrollbar/face': true
	    });

	    var position = this.state.position * this.state.scale + FACE_MARGIN;

	    if (isHorizontal) {
	      mainStyle = {
	        width: size
	      };
	      faceStyle = {
	        width: faceSize - FACE_MARGIN_2
	      };
	      translateDOMPositionXY(faceStyle, position, 0);
	    } else {
	      mainStyle = {
	        top: verticalTop,
	        height: size
	      };
	      faceStyle = {
	        height: faceSize - FACE_MARGIN_2
	      };
	      translateDOMPositionXY(faceStyle, 0, position);
	    }

	    mainStyle.zIndex = this.props.zIndex;

	    if (this.props.trackColor === 'gray') {
	      mainStyle.backgroundColor = cssVar('fbui-desktop-background-light');
	    }

	    return React.createElement(
	      'div',
	      {
	        onFocus: this._onFocus,
	        onBlur: this._onBlur,
	        onKeyDown: this._onKeyDown,
	        onMouseDown: this._onMouseDown,
	        onWheel: this._wheelHandler.onWheel,
	        className: mainClassName,
	        style: mainStyle,
	        tabIndex: 0 },
	      React.createElement('div', {
	        ref: 'face',
	        className: faceClassName,
	        style: faceStyle
	      })
	    );
	  },

	  componentWillMount: function componentWillMount() {
	    var isHorizontal = this.props.orientation === 'horizontal';
	    var onWheel = isHorizontal ? this._onWheelX : this._onWheelY;

	    this._wheelHandler = new ReactWheelHandler(onWheel, this._shouldHandleX, // Should hanlde horizontal scroll
	    this._shouldHandleY // Should handle vertical scroll
	    );
	  },

	  componentDidMount: function componentDidMount() {
	    this._mouseMoveTracker = new DOMMouseMoveTracker(this._onMouseMove, this._onMouseMoveEnd, document.documentElement);

	    if (this.props.position !== undefined && this.state.position !== this.props.position) {
	      this._didScroll();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._nextState = null;
	    this._mouseMoveTracker.releaseMouseMoves();
	    if (_lastScrolledScrollbar === this) {
	      _lastScrolledScrollbar = null;
	    }
	    delete this._mouseMoveTracker;
	  },

	  scrollBy: function scrollBy( /*number*/delta) {
	    this._onWheel(delta);
	  },

	  _shouldHandleX: function _shouldHandleX( /*number*/delta) /*boolean*/{
	    return this.props.orientation === 'horizontal' ? this._shouldHandleChange(delta) : false;
	  },

	  _shouldHandleY: function _shouldHandleY( /*number*/delta) /*boolean*/{
	    return this.props.orientation !== 'horizontal' ? this._shouldHandleChange(delta) : false;
	  },

	  _shouldHandleChange: function _shouldHandleChange( /*number*/delta) /*boolean*/{
	    var nextState = this._calculateState(this.state.position + delta, this.props.size, this.props.contentSize, this.props.orientation);
	    return nextState.position !== this.state.position;
	  },

	  _calculateState: function _calculateState(
	  /*number*/position,
	  /*number*/size,
	  /*number*/contentSize,
	  /*string*/orientation) /*object*/{
	    if (size < 1 || contentSize <= size) {
	      return UNSCROLLABLE_STATE;
	    }

	    var stateKey = position + '_' + size + '_' + contentSize + '_' + orientation;
	    if (this._stateKey === stateKey) {
	      return this._stateForKey;
	    }

	    // There are two types of positions here.
	    // 1) Phisical position: changed by mouse / keyboard
	    // 2) Logical position: changed by props.
	    // The logical position will be kept as as internal state and the `render()`
	    // function will translate it into physical position to render.

	    var isHorizontal = orientation === 'horizontal';
	    var scale = size / contentSize;
	    var faceSize = size * scale;

	    if (faceSize < FACE_SIZE_MIN) {
	      scale = (size - FACE_SIZE_MIN) / (contentSize - size);
	      faceSize = FACE_SIZE_MIN;
	    }

	    var scrollable = true;
	    var maxPosition = contentSize - size;

	    if (position < 0) {
	      position = 0;
	    } else if (position > maxPosition) {
	      position = maxPosition;
	    }

	    var isDragging = this._mouseMoveTracker ? this._mouseMoveTracker.isDragging() : false;

	    // This function should only return flat values that can be compared quiclky
	    // by `ReactComponentWithPureRenderMixin`.
	    var state = {
	      faceSize: faceSize,
	      isDragging: isDragging,
	      isHorizontal: isHorizontal,
	      position: position,
	      scale: scale,
	      scrollable: scrollable
	    };

	    // cache the state for later use.
	    this._stateKey = stateKey;
	    this._stateForKey = state;
	    return state;
	  },

	  _onWheelY: function _onWheelY( /*number*/deltaX, /*number*/deltaY) {
	    this._onWheel(deltaY);
	  },

	  _onWheelX: function _onWheelX( /*number*/deltaX, /*number*/deltaY) {
	    this._onWheel(deltaX);
	  },

	  _onWheel: function _onWheel( /*number*/delta) {
	    var props = this.props;

	    // The mouse may move faster then the animation frame does.
	    // Use `requestAnimationFrame` to avoid over-updating.
	    this._setNextState(this._calculateState(this.state.position + delta, props.size, props.contentSize, props.orientation));
	  },

	  _onMouseDown: function _onMouseDown( /*object*/event) {
	    var nextState;

	    if (event.target !== React.findDOMNode(this.refs.face)) {
	      // Both `offsetX` and `layerX` are non-standard DOM property but they are
	      // magically available for browsers somehow.
	      var nativeEvent = event.nativeEvent;
	      var position = this.state.isHorizontal ? nativeEvent.offsetX || nativeEvent.layerX : nativeEvent.offsetY || nativeEvent.layerY;

	      // MouseDown on the scroll-track directly, move the center of the
	      // scroll-face to the mouse position.
	      var props = this.props;
	      position = position / this.state.scale;
	      nextState = this._calculateState(position - this.state.faceSize * 0.5 / this.state.scale, props.size, props.contentSize, props.orientation);
	    } else {
	      nextState = {};
	    }

	    nextState.focused = true;
	    this._setNextState(nextState);

	    this._mouseMoveTracker.captureMouseMoves(event);
	    // Focus the node so it may receive keyboard event.
	    React.findDOMNode(this).focus();
	  },

	  _onMouseMove: function _onMouseMove( /*number*/deltaX, /*number*/deltaY) {
	    var props = this.props;
	    var delta = this.state.isHorizontal ? deltaX : deltaY;
	    delta = delta / this.state.scale;

	    this._setNextState(this._calculateState(this.state.position + delta, props.size, props.contentSize, props.orientation));
	  },

	  _onMouseMoveEnd: function _onMouseMoveEnd() {
	    this._nextState = null;
	    this._mouseMoveTracker.releaseMouseMoves();
	    this.setState({ isDragging: false });
	  },

	  _onKeyDown: function _onKeyDown( /*object*/event) {
	    var keyCode = event.keyCode;

	    if (keyCode === Keys.TAB) {
	      // Let focus move off the scrollbar.
	      return;
	    }

	    var distance = KEYBOARD_SCROLL_AMOUNT;
	    var direction = 0;

	    if (this.state.isHorizontal) {
	      switch (keyCode) {
	        case Keys.HOME:
	          direction = -1;
	          distance = this.props.contentSize;
	          break;

	        case Keys.LEFT:
	          direction = -1;
	          break;

	        case Keys.RIGHT:
	          direction = 1;
	          break;

	        default:
	          return;
	      }
	    }

	    if (!this.state.isHorizontal) {
	      switch (keyCode) {
	        case Keys.SPACE:
	          if (event.shiftKey) {
	            direction = -1;
	          } else {
	            direction = 1;
	          }
	          break;

	        case Keys.HOME:
	          direction = -1;
	          distance = this.props.contentSize;
	          break;

	        case Keys.UP:
	          direction = -1;
	          break;

	        case Keys.DOWN:
	          direction = 1;
	          break;

	        case Keys.PAGE_UP:
	          direction = -1;
	          distance = this.props.size;
	          break;

	        case Keys.PAGE_DOWN:
	          direction = 1;
	          distance = this.props.size;
	          break;

	        default:
	          return;
	      }
	    }

	    event.preventDefault();

	    var props = this.props;
	    this._setNextState(this._calculateState(this.state.position + distance * direction, props.size, props.contentSize, props.orientation));
	  },

	  _onFocus: function _onFocus() {
	    this.setState({
	      focused: true
	    });
	  },

	  _onBlur: function _onBlur() {
	    this.setState({
	      focused: false
	    });
	  },

	  _blur: function _blur() {
	    if (this.isMounted()) {
	      try {
	        this._onBlur();
	        React.findDOMNode(this).blur();
	      } catch (oops) {
	        // pass
	      }
	    }
	  },

	  _setNextState: function _setNextState( /*object*/nextState, /*?object*/props) {
	    props = props || this.props;
	    var controlledPosition = props.position;
	    var willScroll = this.state.position !== nextState.position;
	    if (controlledPosition === undefined) {
	      var callback = willScroll ? this._didScroll : undefined;
	      this.setState(nextState, callback);
	    } else if (controlledPosition === nextState.position) {
	      this.setState(nextState);
	    } else {
	      // Scrolling is controlled. Don't update the state and let the owner
	      // to update the scrollbar instead.
	      if (nextState.position !== undefined && nextState.position !== this.state.position) {
	        this.props.onScroll(nextState.position);
	      }
	      return;
	    }

	    if (willScroll && _lastScrolledScrollbar !== this) {
	      _lastScrolledScrollbar && _lastScrolledScrollbar._blur();
	      _lastScrolledScrollbar = this;
	    }
	  },

	  _didScroll: function _didScroll() {
	    this.props.onScroll(this.state.position);
	  }
	});

	Scrollbar.KEYBOARD_SCROLL_AMOUNT = KEYBOARD_SCROLL_AMOUNT;
	Scrollbar.SIZE = parseInt(cssVar('scrollbar-size'), 10);

	module.exports = Scrollbar;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This class listens to events on the document and then updates a react
	 * component through callbacks.
	 * Please note that captureMouseMove must be called in
	 * order to initialize listeners on mousemove and mouseup.
	 * releaseMouseMove must be called to remove them. It is important to
	 * call releaseMouseMoves since mousemove is expensive to listen to.
	 *
	 * @providesModule DOMMouseMoveTracker
	 * @typechecks
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var EventListener = __webpack_require__(44);

	var cancelAnimationFramePolyfill = __webpack_require__(45);
	var requestAnimationFramePolyfill = __webpack_require__(40);

	var DOMMouseMoveTracker = (function () {
	  /**
	   * onMove is the callback that will be called on every mouse move.
	   * onMoveEnd is called on mouse up when movement has ended.
	   */

	  function DOMMouseMoveTracker(
	  /*function*/onMove,
	  /*function*/onMoveEnd,
	  /*DOMElement*/domNode) {
	    _classCallCheck(this, DOMMouseMoveTracker);

	    this._isDragging = false;
	    this._animationFrameID = null;
	    this._domNode = domNode;
	    this._onMove = onMove;
	    this._onMoveEnd = onMoveEnd;
	    this._onMouseMove = this._onMouseMove.bind(this);
	    this._onMouseUp = this._onMouseUp.bind(this);
	    this._didMouseMove = this._didMouseMove.bind(this);
	  }

	  /**
	   * This is to set up the listeners for listening to mouse move
	   * and mouse up signaling the movement has ended. Please note that these
	   * listeners are added at the document.body level. It takes in an event
	   * in order to grab inital state.
	   */

	  _createClass(DOMMouseMoveTracker, [{
	    key: 'captureMouseMoves',
	    value: function captureMouseMoves( /*object*/event) {
	      if (!this._eventMoveToken && !this._eventUpToken) {
	        this._eventMoveToken = EventListener.listen(this._domNode, 'mousemove', this._onMouseMove);
	        this._eventUpToken = EventListener.listen(this._domNode, 'mouseup', this._onMouseUp);
	      }

	      if (!this._isDragging) {
	        this._deltaX = 0;
	        this._deltaY = 0;
	        this._isDragging = true;
	        this._x = event.clientX;
	        this._y = event.clientY;
	      }
	      event.preventDefault();
	    }

	    /**
	     * These releases all of the listeners on document.body.
	     */
	  }, {
	    key: 'releaseMouseMoves',
	    value: function releaseMouseMoves() {
	      if (this._eventMoveToken && this._eventUpToken) {
	        this._eventMoveToken.remove();
	        this._eventMoveToken = null;
	        this._eventUpToken.remove();
	        this._eventUpToken = null;
	      }

	      if (this._animationFrameID !== null) {
	        cancelAnimationFramePolyfill(this._animationFrameID);
	        this._animationFrameID = null;
	      }

	      if (this._isDragging) {
	        this._isDragging = false;
	        this._x = null;
	        this._y = null;
	      }
	    }

	    /**
	     * Returns whether or not if the mouse movement is being tracked.
	     */
	  }, {
	    key: 'isDragging',
	    value: function isDragging() /*boolean*/{
	      return this._isDragging;
	    }

	    /**
	     * Calls onMove passed into constructor and updates internal state.
	     */
	  }, {
	    key: '_onMouseMove',
	    value: function _onMouseMove( /*object*/event) {
	      var x = event.clientX;
	      var y = event.clientY;

	      this._deltaX += x - this._x;
	      this._deltaY += y - this._y;

	      if (this._animationFrameID === null) {
	        // The mouse may move faster then the animation frame does.
	        // Use `requestAnimationFramePolyfill` to avoid over-updating.
	        this._animationFrameID = requestAnimationFramePolyfill(this._didMouseMove);
	      }

	      this._x = x;
	      this._y = y;
	      event.preventDefault();
	    }
	  }, {
	    key: '_didMouseMove',
	    value: function _didMouseMove() {
	      this._animationFrameID = null;
	      this._onMove(this._deltaX, this._deltaY);
	      this._deltaX = 0;
	      this._deltaY = 0;
	    }

	    /**
	     * Calls onMoveEnd passed into constructor and updates internal state.
	     */
	  }, {
	    key: '_onMouseUp',
	    value: function _onMouseUp() {
	      if (this._animationFrameID) {
	        this._didMouseMove();
	      }
	      this._onMoveEnd();
	    }
	  }]);

	  return DOMMouseMoveTracker;
	})();

	module.exports = DOMMouseMoveTracker;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */

	'use strict';

	var emptyFunction = __webpack_require__(35);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (!target.addEventListener) {
	      if (true) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    } else {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	};

	module.exports = EventListener;

/***/ },
/* 45 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cancelAnimationFramePolyfill
	 */

	/**
	 * Here is the native and polyfill version of cancelAnimationFrame.
	 * Please don't use it directly and use cancelAnimationFrame module instead.
	 */
	"use strict";

	var cancelAnimationFrame = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame || global.clearTimeout;

	module.exports = cancelAnimationFrame;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Keys
	 */

	"use strict";

	module.exports = {
	  BACKSPACE: 8,
	  TAB: 9,
	  RETURN: 13,
	  ALT: 18,
	  ESC: 27,
	  SPACE: 32,
	  PAGE_UP: 33,
	  PAGE_DOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  DELETE: 46,
	  COMMA: 188,
	  PERIOD: 190,
	  A: 65,
	  Z: 90,
	  ZERO: 48,
	  NUMPAD_0: 96,
	  NUMPAD_9: 105
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cssVar
	 * @typechecks
	 */

	"use strict";

	var CSS_VARS = {
	  'scrollbar-face-active-color': '#7d7d7d',
	  'scrollbar-face-color': '#c2c2c2',
	  'scrollbar-face-margin': '4px',
	  'scrollbar-face-radius': '6px',
	  'scrollbar-size': '15px',
	  'scrollbar-size-large': '17px',
	  'scrollbar-track-color': 'rgba(255, 255, 255, 0.8)',
	  'fbui-white': '#fff',
	  'fbui-desktop-background-light': '#f6f7f8'
	};

	/**
	 * @param {string} name
	 */
	function cssVar(name) {
	  if (CSS_VARS.hasOwnProperty(name)) {
	    return CSS_VARS[name];
	  }

	  throw new Error('cssVar' + '("' + name + '"): Unexpected class transformation.');
	}

	cssVar.CSS_VARS = CSS_VARS;

	module.exports = cssVar;

/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */

	'use strict';

	var slashReplaceRegex = /\//g;
	var cache = {};

	function getClassName(className) {
	  if (cache[className]) {
	    return cache[className];
	  }

	  cache[className] = className.replace(slashReplaceRegex, '_');
	  return cache[className];
	}

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */
	function cx(classNames) {
	  var classNamesArray;
	  if (typeof classNames == 'object') {
	    classNamesArray = Object.keys(classNames).filter(function (className) {
	      return classNames[className];
	    });
	  } else {
	    classNamesArray = Array.prototype.slice.call(arguments);
	  }

	  return classNamesArray.map(getClassName).join(' ');
	}

	module.exports = cx;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule translateDOMPositionXY
	 * @typechecks
	 */

	'use strict';

	var BrowserSupportCore = __webpack_require__(50);

	var getVendorPrefixedName = __webpack_require__(51);

	var TRANSFORM = getVendorPrefixedName('transform');
	var BACKFACE_VISIBILITY = getVendorPrefixedName('backfaceVisibility');

	var translateDOMPositionXY = (function () {
	  if (BrowserSupportCore.hasCSSTransforms()) {
	    var ua = global.window ? global.window.navigator.userAgent : 'UNKNOWN';
	    var isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
	    // It appears that Safari messes up the composition order
	    // of GPU-accelerated layers
	    // (see bug https://bugs.webkit.org/show_bug.cgi?id=61824).
	    // Use 2D translation instead.
	    if (!isSafari && BrowserSupportCore.hasCSS3DTransforms()) {
	      return function ( /*object*/style, /*number*/x, /*number*/y) {
	        style[TRANSFORM] = 'translate3d(' + x + 'px,' + y + 'px,0)';
	        style[BACKFACE_VISIBILITY] = 'hidden';
	      };
	    } else {
	      return function ( /*object*/style, /*number*/x, /*number*/y) {
	        style[TRANSFORM] = 'translate(' + x + 'px,' + y + 'px)';
	      };
	    }
	  } else {
	    return function ( /*object*/style, /*number*/x, /*number*/y) {
	      style.left = x + 'px';
	      style.top = y + 'px';
	    };
	  }
	})();

	module.exports = translateDOMPositionXY;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BrowserSupportCore
	 */

	'use strict';

	var getVendorPrefixedName = __webpack_require__(51);

	var BrowserSupportCore = {
	  /**
	   * @return {bool} True if browser supports css animations.
	   */
	  hasCSSAnimations: function hasCSSAnimations() {
	    return !!getVendorPrefixedName('animationName');
	  },

	  /**
	   * @return {bool} True if browser supports css transforms.
	   */
	  hasCSSTransforms: function hasCSSTransforms() {
	    return !!getVendorPrefixedName('transform');
	  },

	  /**
	   * @return {bool} True if browser supports css 3d transforms.
	   */
	  hasCSS3DTransforms: function hasCSS3DTransforms() {
	    return !!getVendorPrefixedName('perspective');
	  },

	  /**
	   * @return {bool} True if browser supports css transitions.
	   */
	  hasCSSTransitions: function hasCSSTransitions() {
	    return !!getVendorPrefixedName('transition');
	  }
	};

	module.exports = BrowserSupportCore;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getVendorPrefixedName
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(39);

	var camelize = __webpack_require__(52);
	var invariant = __webpack_require__(53);

	var memoized = {};
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	var prefixRegex = new RegExp('^(' + prefixes.join('|') + ')');
	var testStyle = ExecutionEnvironment.canUseDOM ? document.createElement('div').style : {};

	function getWithPrefix(name) {
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixedName = prefixes[i] + name;
	    if (prefixedName in testStyle) {
	      return prefixedName;
	    }
	  }
	  return null;
	}

	/**
	 * @param {string} property Name of a css property to check for.
	 * @return {?string} property name supported in the browser, or null if not
	 * supported.
	 */
	function getVendorPrefixedName(property) {
	  var name = camelize(property);
	  if (memoized[name] === undefined) {
	    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
	    if (prefixRegex.test(capitalizedName)) {
	      invariant(false, 'getVendorPrefixedName must only be called with unprefixed' + 'CSS property names. It was called with %s', property);
	    }
	    memoized[name] = name in testStyle ? name : getWithPrefix(capitalizedName);
	  }
	  return memoized[name];
	}

	module.exports = getVendorPrefixedName;

/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */

	"use strict";

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableBufferedRows.react
	 * @typechecks
	 */

	'use strict';

	var React = __webpack_require__(29);
	var FixedDataTableRowBuffer = __webpack_require__(55);
	var FixedDataTableRow = __webpack_require__(59);

	var cx = __webpack_require__(48);
	var emptyFunction = __webpack_require__(35);
	var joinClasses = __webpack_require__(68);
	var translateDOMPositionXY = __webpack_require__(49);

	var PropTypes = React.PropTypes;

	var FixedDataTableBufferedRows = React.createClass({
	  displayName: 'FixedDataTableBufferedRows',

	  propTypes: {
	    defaultRowHeight: PropTypes.number.isRequired,
	    firstRowIndex: PropTypes.number.isRequired,
	    firstRowOffset: PropTypes.number.isRequired,
	    fixedColumns: PropTypes.array.isRequired,
	    height: PropTypes.number.isRequired,
	    offsetTop: PropTypes.number.isRequired,
	    onRowClick: PropTypes.func,
	    onRowDoubleClick: PropTypes.func,
	    onRowMouseDown: PropTypes.func,
	    onRowMouseEnter: PropTypes.func,
	    onRowMouseLeave: PropTypes.func,
	    rowClassNameGetter: PropTypes.func,
	    rowsCount: PropTypes.number.isRequired,
	    rowGetter: PropTypes.func.isRequired,
	    rowHeightGetter: PropTypes.func,
	    rowPositionGetter: PropTypes.func.isRequired,
	    scrollLeft: PropTypes.number.isRequired,
	    scrollableColumns: PropTypes.array.isRequired,
	    showLastRowBorder: PropTypes.bool,
	    width: PropTypes.number.isRequired,
	    onDragDrop: PropTypes.func,
	    onDrop: PropTypes.func
	  },

	  getInitialState: function getInitialState() /*object*/{
	    this._rowBuffer = new FixedDataTableRowBuffer(this.props.rowsCount, this.props.defaultRowHeight, this.props.height, this._getRowHeight);
	    return {
	      rowsToRender: this._rowBuffer.getRows(this.props.firstRowIndex, this.props.firstRowOffset)
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this._staticRowArray = [];
	  },

	  componentDidMount: function componentDidMount() {
	    this._bufferUpdateTimer = setTimeout(this._updateBuffer, 1000);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/nextProps) {
	    if (nextProps.rowsCount !== this.props.rowsCount || nextProps.defaultRowHeight !== this.props.defaultRowHeight || nextProps.height !== this.props.height) {
	      this._rowBuffer = new FixedDataTableRowBuffer(nextProps.rowsCount, nextProps.defaultRowHeight, nextProps.height, this._getRowHeight);
	    }
	    this.setState({
	      rowsToRender: this._rowBuffer.getRows(nextProps.firstRowIndex, nextProps.firstRowOffset)
	    });
	    if (this._bufferUpdateTimer) {
	      clearTimeout(this._bufferUpdateTimer);
	    }
	    this._bufferUpdateTimer = setTimeout(this._updateBuffer, 400);
	  },

	  _updateBuffer: function _updateBuffer() {
	    this._bufferUpdateTimer = null;
	    if (this.isMounted()) {
	      this.setState({
	        rowsToRender: this._rowBuffer.getRowsWithUpdatedBuffer()
	      });
	    }
	  },

	  shouldComponentUpdate: function shouldComponentUpdate() /*boolean*/{
	    // Don't add PureRenderMixin to this component please.
	    return true;
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._staticRowArray.length = 0;
	  },

	  render: function render() /*object*/{
	    var props = this.props;
	    var rowClassNameGetter = props.rowClassNameGetter || emptyFunction;
	    var rowGetter = props.rowGetter;
	    var rowPositionGetter = props.rowPositionGetter;

	    var rowsToRender = this.state.rowsToRender;
	    this._staticRowArray.length = rowsToRender.length;

	    for (var i = 0; i < rowsToRender.length; ++i) {
	      var rowIndex = rowsToRender[i];
	      var currentRowHeight = this._getRowHeight(rowIndex);
	      var rowOffsetTop = rowPositionGetter(rowIndex);

	      var hasBottomBorder = rowIndex === props.rowsCount - 1 && props.showLastRowBorder;

	      this._staticRowArray[i] = React.createElement(FixedDataTableRow, {
	        key: i,
	        index: rowIndex,
	        data: rowGetter(rowIndex),
	        width: props.width,
	        height: currentRowHeight,
	        scrollLeft: Math.round(props.scrollLeft),
	        offsetTop: Math.round(rowOffsetTop),
	        fixedColumns: props.fixedColumns,
	        scrollableColumns: props.scrollableColumns,
	        onClick: props.onRowClick,
	        onDoubleClick: props.onRowDoubleClick,
	        onMouseDown: props.onRowMouseDown,
	        onMouseEnter: props.onRowMouseEnter,
	        onMouseLeave: props.onRowMouseLeave,
	        onDragDrop: props.onDragDrop,
	        onDrop: props.onDrop,
	        isSortable: props.isSortable,
	        className: joinClasses(rowClassNameGetter(rowIndex), cx('public/fixedDataTable/bodyRow'), cx({
	          'fixedDataTableLayout/hasBottomBorder': hasBottomBorder,
	          'public/fixedDataTable/hasBottomBorder': hasBottomBorder
	        }))
	      });
	    }

	    var firstRowPosition = props.rowPositionGetter(props.firstRowIndex);

	    var style = {
	      position: 'absolute'
	    };

	    translateDOMPositionXY(style, 0, props.firstRowOffset - firstRowPosition + props.offsetTop);

	    return React.createElement(
	      'div',
	      { style: style },
	      this._staticRowArray
	    );
	  },

	  _getRowHeight: function _getRowHeight( /*number*/index) /*number*/{
	    return this.props.rowHeightGetter ? this.props.rowHeightGetter(index) : this.props.defaultRowHeight;
	  }
	});

	module.exports = FixedDataTableBufferedRows;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableRowBuffer
	 * @typechecks
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var IntegerBufferSet = __webpack_require__(56);

	var clamp = __webpack_require__(58);
	var invariant = __webpack_require__(53);
	var MIN_BUFFER_ROWS = 3;
	var MAX_BUFFER_ROWS = 6;

	// FixedDataTableRowBuffer is a helper class that executes row buffering
	// logic for FixedDataTable. It figures out which rows should be rendered
	// and in which positions.

	var FixedDataTableRowBuffer = (function () {
	  function FixedDataTableRowBuffer(
	  /*number*/rowsCount,
	  /*number*/defaultRowHeight,
	  /*number*/viewportHeight,
	  /*?function*/rowHeightGetter) {
	    _classCallCheck(this, FixedDataTableRowBuffer);

	    invariant(defaultRowHeight !== 0, "defaultRowHeight musn't be equal 0 in FixedDataTableRowBuffer");

	    this._bufferSet = new IntegerBufferSet();
	    this._defaultRowHeight = defaultRowHeight;
	    this._viewportRowsBegin = 0;
	    this._viewportRowsEnd = 0;
	    this._maxVisibleRowCount = Math.ceil(viewportHeight / defaultRowHeight) + 1;
	    this._bufferRowsCount = clamp(MIN_BUFFER_ROWS, Math.floor(this._maxVisibleRowCount / 2), MAX_BUFFER_ROWS);
	    this._rowsCount = rowsCount;
	    this._rowHeightGetter = rowHeightGetter;
	    this._rows = [];
	    this._viewportHeight = viewportHeight;

	    this.getRows = this.getRows.bind(this);
	    this.getRowsWithUpdatedBuffer = this.getRowsWithUpdatedBuffer.bind(this);
	  }

	  _createClass(FixedDataTableRowBuffer, [{
	    key: 'getRowsWithUpdatedBuffer',
	    value: function getRowsWithUpdatedBuffer() /*array*/{
	      var remainingBufferRows = 2 * this._bufferRowsCount;
	      var bufferRowIndex = Math.max(this._viewportRowsBegin - this._bufferRowsCount, 0);
	      while (bufferRowIndex < this._viewportRowsBegin) {
	        this._addRowToBuffer(bufferRowIndex, this._viewportRowsBegin, this._viewportRowsEnd - 1);
	        bufferRowIndex++;
	        remainingBufferRows--;
	      }
	      bufferRowIndex = this._viewportRowsEnd;
	      while (bufferRowIndex < this._rowsCount && remainingBufferRows > 0) {
	        this._addRowToBuffer(bufferRowIndex, this._viewportRowsBegin, this._viewportRowsEnd - 1);
	        bufferRowIndex++;
	        remainingBufferRows--;
	      }
	      return this._rows;
	    }
	  }, {
	    key: 'getRows',
	    value: function getRows(
	    /*number*/firstRowIndex,
	    /*number*/firstRowOffset) /*array*/{
	      var top = firstRowOffset;
	      var totalHeight = top;
	      var rowIndex = firstRowIndex;
	      var endIndex = Math.min(firstRowIndex + this._maxVisibleRowCount, this._rowsCount);

	      this._viewportRowsBegin = firstRowIndex;
	      while (rowIndex < endIndex || totalHeight < this._viewportHeight && rowIndex < this._rowsCount) {
	        this._addRowToBuffer(rowIndex, firstRowIndex, endIndex - 1);
	        totalHeight += this._rowHeightGetter(rowIndex);
	        ++rowIndex;
	        // Store index after the last viewport row as end, to be able to
	        // distinguish when there are no rows rendered in viewport
	        this._viewportRowsEnd = rowIndex;
	      }

	      return this._rows;
	    }
	  }, {
	    key: '_addRowToBuffer',
	    value: function _addRowToBuffer(
	    /*number*/rowIndex,
	    /*number*/firstViewportRowIndex,
	    /*number*/lastViewportRowIndex) {
	      var rowPosition = this._bufferSet.getValuePosition(rowIndex);
	      var viewportRowsCount = lastViewportRowIndex - firstViewportRowIndex + 1;
	      var allowedRowsCount = viewportRowsCount + this._bufferRowsCount * 2;
	      if (rowPosition === null && this._bufferSet.getSize() >= allowedRowsCount) {
	        rowPosition = this._bufferSet.replaceFurthestValuePosition(firstViewportRowIndex, lastViewportRowIndex, rowIndex);
	      }
	      if (rowPosition === null) {
	        // We can't reuse any of existing positions for this row. We have to
	        // create new position
	        rowPosition = this._bufferSet.getNewPositionForValue(rowIndex);
	        this._rows[rowPosition] = rowIndex;
	      } else {
	        // This row already is in the table with rowPosition position or it
	        // can replace row that is in that position
	        this._rows[rowPosition] = rowIndex;
	      }
	    }
	  }]);

	  return FixedDataTableRowBuffer;
	})();

	module.exports = FixedDataTableRowBuffer;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule IntegerBufferSet
	 * @typechecks
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Heap = __webpack_require__(57);

	var invariant = __webpack_require__(53);

	// Data structure that allows to store values and assign positions to them
	// in a way to minimize changing positions of stored values when new ones are
	// added or when some values are replaced. Stored elements are alwasy assigned
	// a consecutive set of positoins startin from 0 up to count of elements less 1
	// Following actions can be executed
	// * get position assigned to given value (null if value is not stored)
	// * create new entry for new value and get assigned position back
	// * replace value that is furthest from specified value range with new value
	//   and get it's position back
	// All operations take amortized log(n) time where n is number of elements in
	// the set.

	var IntegerBufferSet = (function () {
	  function IntegerBufferSet() {
	    _classCallCheck(this, IntegerBufferSet);

	    this._valueToPositionMap = {};
	    this._size = 0;
	    this._smallValues = new Heap([], // Initial data in the heap
	    this._smallerComparator);
	    this._largeValues = new Heap([], // Initial data in the heap
	    this._greaterComparator);

	    this.getNewPositionForValue = this.getNewPositionForValue.bind(this);
	    this.getValuePosition = this.getValuePosition.bind(this);
	    this.getSize = this.getSize.bind(this);
	    this.replaceFurthestValuePosition = this.replaceFurthestValuePosition.bind(this);
	  }

	  _createClass(IntegerBufferSet, [{
	    key: 'getSize',
	    value: function getSize() /*number*/{
	      return this._size;
	    }
	  }, {
	    key: 'getValuePosition',
	    value: function getValuePosition( /*number*/value) /*?number*/{
	      if (this._valueToPositionMap[value] === undefined) {
	        return null;
	      }
	      return this._valueToPositionMap[value];
	    }
	  }, {
	    key: 'getNewPositionForValue',
	    value: function getNewPositionForValue( /*number*/value) /*number*/{
	      invariant(this._valueToPositionMap[value] === undefined, "Shouldn't try to find new position for value already stored in BufferSet");
	      var newPosition = this._size;
	      this._size++;
	      this._pushToHeaps(newPosition, value);
	      this._valueToPositionMap[value] = newPosition;
	      return newPosition;
	    }
	  }, {
	    key: 'replaceFurthestValuePosition',
	    value: function replaceFurthestValuePosition(
	    /*number*/lowValue,
	    /*number*/highValue,
	    /*number*/newValue) /*?number*/{
	      invariant(this._valueToPositionMap[newValue] === undefined, "Shouldn't try to replace values with value already stored value in " + "BufferSet");

	      this._cleanHeaps();
	      if (this._smallValues.empty() || this._largeValues.empty()) {
	        // Threre are currently no values stored. We will have to create new
	        // position for this value.
	        return null;
	      }

	      var minValue = this._smallValues.peek().value;
	      var maxValue = this._largeValues.peek().value;
	      if (minValue >= lowValue && maxValue <= highValue) {
	        // All values currently stored are necessary, we can't reuse any of them.
	        return null;
	      }

	      var valueToReplace;
	      if (lowValue - minValue > maxValue - highValue) {
	        // minValue is further from provided range. We will reuse it's position.
	        valueToReplace = minValue;
	        this._smallValues.pop();
	      } else {
	        valueToReplace = maxValue;
	        this._largeValues.pop();
	      }
	      var position = this._valueToPositionMap[valueToReplace];
	      delete this._valueToPositionMap[valueToReplace];
	      this._valueToPositionMap[newValue] = position;
	      this._pushToHeaps(position, newValue);

	      return position;
	    }
	  }, {
	    key: '_pushToHeaps',
	    value: function _pushToHeaps( /*number*/position, /*number*/value) {
	      var element = {
	        position: position,
	        value: value
	      };
	      // We can reuse the same object in both heaps, because we don't mutate them
	      this._smallValues.push(element);
	      this._largeValues.push(element);
	    }
	  }, {
	    key: '_cleanHeaps',
	    value: function _cleanHeaps() {
	      // We not usually only remove object from one heap while moving value.
	      // Here we make sure that there is no stale data on top of heaps.
	      this._cleanHeap(this._smallValues);
	      this._cleanHeap(this._largeValues);
	      var minHeapSize = Math.min(this._smallValues.size(), this._largeValues.size());
	      var maxHeapSize = Math.max(this._smallValues.size(), this._largeValues.size());
	      if (maxHeapSize > 10 * minHeapSize) {
	        // There are many old values in one of heaps. We nned to get rid of them
	        // to not use too avoid memory leaks
	        this._recreateHeaps();
	      }
	    }
	  }, {
	    key: '_recreateHeaps',
	    value: function _recreateHeaps() {
	      var sourceHeap = this._smallValues.size() < this._largeValues.size() ? this._smallValues : this._largeValues;
	      var newSmallValues = new Heap([], // Initial data in the heap
	      this._smallerComparator);
	      var newLargeValues = new Heap([], // Initial datat in the heap
	      this._greaterComparator);
	      while (!sourceHeap.empty()) {
	        var element = sourceHeap.pop();
	        // Push all stil valid elements to new heaps
	        if (this._valueToPositionMap[element.value] !== undefined) {
	          newSmallValues.push(element);
	          newLargeValues.push(element);
	        }
	      }
	      this._smallValues = newSmallValues;
	      this._largeValues = newLargeValues;
	    }
	  }, {
	    key: '_cleanHeap',
	    value: function _cleanHeap( /*object*/heap) {
	      while (!heap.empty() && this._valueToPositionMap[heap.peek().value] === undefined) {
	        heap.pop();
	      }
	    }
	  }, {
	    key: '_smallerComparator',
	    value: function _smallerComparator( /*object*/lhs, /*object*/rhs) /*boolean*/{
	      return lhs.value < rhs.value;
	    }
	  }, {
	    key: '_greaterComparator',
	    value: function _greaterComparator( /*object*/lhs, /*object*/rhs) /*boolean*/{
	      return lhs.value > rhs.value;
	    }
	  }]);

	  return IntegerBufferSet;
	})();

	module.exports = IntegerBufferSet;

/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Heap
	 * @typechecks
	 * @preventMunge
	 */

	'use strict';

	/*
	 * @param {*} a
	 * @param {*} b
	 * @return {boolean}
	 */

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function defaultComparator(a, b) {
	  return a < b;
	}

	var Heap = (function () {
	  function Heap(items, comparator) {
	    _classCallCheck(this, Heap);

	    this._items = items || [];
	    this._size = this._items.length;
	    this._comparator = comparator || defaultComparator;
	    this._heapify();
	  }

	  /*
	   * @return {boolean}
	   */

	  _createClass(Heap, [{
	    key: 'empty',
	    value: function empty() {
	      return this._size === 0;
	    }

	    /*
	     * @return {*}
	     */
	  }, {
	    key: 'pop',
	    value: function pop() {
	      if (this._size === 0) {
	        return;
	      }

	      var elt = this._items[0];

	      var lastElt = this._items.pop();
	      this._size--;

	      if (this._size > 0) {
	        this._items[0] = lastElt;
	        this._sinkDown(0);
	      }

	      return elt;
	    }

	    /*
	     * @param {*} item
	     */
	  }, {
	    key: 'push',
	    value: function push(item) {
	      this._items[this._size++] = item;
	      this._bubbleUp(this._size - 1);
	    }

	    /*
	     * @return {number}
	     */
	  }, {
	    key: 'size',
	    value: function size() {
	      return this._size;
	    }

	    /*
	     * @return {*}
	     */
	  }, {
	    key: 'peek',
	    value: function peek() {
	      if (this._size === 0) {
	        return;
	      }

	      return this._items[0];
	    }
	  }, {
	    key: '_heapify',
	    value: function _heapify() {
	      for (var index = Math.floor((this._size + 1) / 2); index >= 0; index--) {
	        this._sinkDown(index);
	      }
	    }

	    /*
	     * @parent {number} index
	     */
	  }, {
	    key: '_bubbleUp',
	    value: function _bubbleUp(index) {
	      var elt = this._items[index];
	      while (index > 0) {
	        var parentIndex = Math.floor((index + 1) / 2) - 1;
	        var parentElt = this._items[parentIndex];

	        // if parentElt < elt, stop
	        if (this._comparator(parentElt, elt)) {
	          return;
	        }

	        // swap
	        this._items[parentIndex] = elt;
	        this._items[index] = parentElt;
	        index = parentIndex;
	      }
	    }

	    /*
	     * @parent {number} index
	     */
	  }, {
	    key: '_sinkDown',
	    value: function _sinkDown(index) {
	      var elt = this._items[index];

	      while (true) {
	        var leftChildIndex = 2 * (index + 1) - 1;
	        var rightChildIndex = 2 * (index + 1);
	        var swapIndex = -1;

	        if (leftChildIndex < this._size) {
	          var leftChild = this._items[leftChildIndex];
	          if (this._comparator(leftChild, elt)) {
	            swapIndex = leftChildIndex;
	          }
	        }

	        if (rightChildIndex < this._size) {
	          var rightChild = this._items[rightChildIndex];
	          if (this._comparator(rightChild, elt)) {
	            if (swapIndex === -1 || this._comparator(rightChild, this._items[swapIndex])) {
	              swapIndex = rightChildIndex;
	            }
	          }
	        }

	        // if we don't have a swap, stop
	        if (swapIndex === -1) {
	          return;
	        }

	        this._items[index] = this._items[swapIndex];
	        this._items[swapIndex] = elt;
	        index = swapIndex;
	      }
	    }
	  }]);

	  return Heap;
	})();

	module.exports = Heap;

/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule clamp
	 * @typechecks
	 */

	/**
	 * @param {number} min
	 * @param {number} value
	 * @param {number} max
	 * @return {number}
	 */
	"use strict";

	function clamp(min, value, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}

	module.exports = clamp;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

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

	var React = __webpack_require__(29);
	var ReactComponentWithPureRenderMixin = __webpack_require__(33);
	var FixedDataTableCellGroup = __webpack_require__(60);

	var cx = __webpack_require__(48);
	var joinClasses = __webpack_require__(68);
	var translateDOMPositionXY = __webpack_require__(49);

	var PropTypes = React.PropTypes;

	// Drag and drop
	var DropTarget = __webpack_require__(69).DropTarget;
	var DragSource = __webpack_require__(69).DragSource;
	var DragDropConfig = __webpack_require__(153);

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

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableCellGroup.react
	 * @typechecks
	 */

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FixedDataTableHelper = __webpack_require__(27);
	var ImmutableObject = __webpack_require__(61);
	var React = __webpack_require__(29);
	var ReactComponentWithPureRenderMixin = __webpack_require__(33);
	var FixedDataTableCell = __webpack_require__(67);

	var cx = __webpack_require__(48);
	var renderToString = FixedDataTableHelper.renderToString;
	var translateDOMPositionXY = __webpack_require__(49);

	var PropTypes = React.PropTypes;

	var DIR_SIGN = FixedDataTableHelper.DIR_SIGN;
	var EMPTY_OBJECT = new ImmutableObject({});

	var FixedDataTableCellGroupImpl = React.createClass({
	  displayName: 'FixedDataTableCellGroupImpl',

	  mixins: [ReactComponentWithPureRenderMixin],

	  propTypes: {

	    /**
	     * Array of <FixedDataTableColumn />.
	     */
	    columns: PropTypes.array.isRequired,

	    /**
	     * The row data to render. The data format can be a simple Map object
	     * or an Array of data.
	     */
	    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

	    left: PropTypes.number,

	    onColumnResize: PropTypes.func,

	    rowHeight: PropTypes.number.isRequired,

	    rowIndex: PropTypes.number.isRequired,

	    width: PropTypes.number.isRequired,

	    zIndex: PropTypes.number.isRequired
	  },

	  render: function render() /*object*/{
	    var props = this.props;
	    var columns = props.columns;
	    var cells = new Array(columns.length);

	    var currentPosition = 0;
	    for (var i = 0, j = columns.length; i < j; i++) {
	      var columnProps = columns[i].props;
	      if (!columnProps.allowCellsRecycling || currentPosition - props.left <= props.width && currentPosition - props.left + columnProps.width >= 0) {
	        var key = 'cell_' + i;
	        cells[i] = this._renderCell(props.data, props.rowIndex, props.rowHeight, columnProps, currentPosition, key);
	      }
	      currentPosition += columnProps.width;
	    }

	    var contentWidth = this._getColumnsWidth(columns);

	    var style = {
	      height: props.height,
	      position: 'absolute',
	      width: contentWidth,
	      zIndex: props.zIndex
	    };
	    translateDOMPositionXY(style, -1 * DIR_SIGN * props.left, 0);

	    return React.createElement(
	      'div',
	      {
	        className: cx('fixedDataTableCellGroupLayout/cellGroup'),
	        style: style },
	      cells
	    );
	  },

	  _renderCell: function _renderCell(
	  /*?object|array*/rowData,
	  /*number*/rowIndex,
	  /*number*/height,
	  /*object*/columnProps,
	  /*number*/left,
	  /*string*/key) /*object*/{
	    var cellRenderer = columnProps.cellRenderer || renderToString;
	    var columnData = columnProps.columnData || EMPTY_OBJECT;
	    var cellDataKey = columnProps.dataKey;
	    var isFooterCell = columnProps.isFooterCell;
	    var isHeaderCell = columnProps.isHeaderCell;
	    var cellData;

	    if (isHeaderCell || isFooterCell) {
	      if (rowData == null || rowData[cellDataKey] == null) {
	        cellData = columnProps.label;
	      } else {
	        cellData = rowData[cellDataKey];
	      }
	    } else {
	      var cellDataGetter = columnProps.cellDataGetter;
	      cellData = cellDataGetter ? cellDataGetter(cellDataKey, rowData) : rowData[cellDataKey];
	    }

	    var cellIsResizable = columnProps.isResizable && this.props.onColumnResize;
	    var onColumnResize = cellIsResizable ? this.props.onColumnResize : null;

	    var className;
	    if (isHeaderCell || isFooterCell) {
	      className = isHeaderCell ? columnProps.headerClassName : columnProps.footerClassName;
	    } else {
	      className = columnProps.cellClassName;
	    }

	    return React.createElement(FixedDataTableCell, {
	      align: columnProps.align,
	      cellData: cellData,
	      cellDataKey: cellDataKey,
	      cellRenderer: cellRenderer,
	      className: className,
	      columnData: columnData,
	      height: height,
	      isFooterCell: isFooterCell,
	      isHeaderCell: isHeaderCell,
	      key: key,
	      maxWidth: columnProps.maxWidth,
	      minWidth: columnProps.minWidth,
	      onColumnResize: onColumnResize,
	      rowData: rowData,
	      rowIndex: rowIndex,
	      width: columnProps.width,
	      left: left
	    });
	  },

	  _getColumnsWidth: function _getColumnsWidth(columns) {
	    var width = 0;
	    for (var i = 0; i < columns.length; ++i) {
	      width += columns[i].props.width;
	    }
	    return width;
	  }
	});

	var FixedDataTableCellGroup = React.createClass({
	  displayName: 'FixedDataTableCellGroup',

	  mixins: [ReactComponentWithPureRenderMixin],

	  propTypes: {
	    /**
	     * Height of the row.
	     */
	    height: PropTypes.number.isRequired,

	    offsetLeft: PropTypes.number,

	    /**
	     * Z-index on which the row will be displayed. Used e.g. for keeping
	     * header and footer in front of other rows.
	     */
	    zIndex: PropTypes.number.isRequired
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return {
	      offsetLeft: 0
	    };
	  },

	  render: function render() /*object*/{
	    var _props = this.props;
	    var offsetLeft = _props.offsetLeft;

	    var props = _objectWithoutProperties(_props, ['offsetLeft']);

	    var style = {
	      height: props.height
	    };

	    if (DIR_SIGN === 1) {
	      style.left = offsetLeft;
	    } else {
	      style.right = offsetLeft;
	    }

	    var onColumnResize = props.onColumnResize ? this._onColumnResize : null;

	    return React.createElement(
	      'div',
	      {
	        style: style,
	        className: cx('fixedDataTableCellGroupLayout/cellGroupWrapper') },
	      React.createElement(FixedDataTableCellGroupImpl, _extends({}, props, {
	        onColumnResize: onColumnResize
	      }))
	    );
	  },

	  _onColumnResize: function _onColumnResize(
	  /*number*/left,
	  /*number*/width,
	  /*?number*/minWidth,
	  /*?number*/maxWidth,
	  /*string|number*/cellDataKey,
	  /*object*/event) {
	    this.props.onColumnResize && this.props.onColumnResize(this.props.offsetLeft, left - this.props.left + width, width, minWidth, maxWidth, cellDataKey, event);
	  }
	});

	module.exports = FixedDataTableCellGroup;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ImmutableObject
	 * @typechecks
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImmutableValue = __webpack_require__(62);

	var invariant = __webpack_require__(53);
	var keyOf = __webpack_require__(64);
	var mergeHelpers = __webpack_require__(65);

	var checkMergeObjectArgs = mergeHelpers.checkMergeObjectArgs;
	var isTerminal = mergeHelpers.isTerminal;

	var SECRET_KEY = keyOf({ _DONT_EVER_TYPE_THIS_SECRET_KEY: null });

	/**
	 * Static methods creating and operating on instances of `ImmutableValue`.
	 */
	function assertImmutable(immutable) {
	  invariant(immutable instanceof ImmutableValue, 'ImmutableObject: Attempted to set fields on an object that is not an ' + 'instance of ImmutableValue.');
	}

	/**
	 * Static methods for reasoning about instances of `ImmutableObject`. Execute
	 * the freeze commands in `__DEV__` mode to alert the programmer that something
	 * is attempting to mutate. Since freezing is very expensive, we avoid doing it
	 * at all in production.
	 */

	var ImmutableObject = (function (_ImmutableValue) {
	  _inherits(ImmutableObject, _ImmutableValue);

	  /**
	   * @arguments {array<object>} The arguments is an array of objects that, when
	   * merged together, will form the immutable objects.
	   */

	  function ImmutableObject() {
	    _classCallCheck(this, ImmutableObject);

	    _get(Object.getPrototypeOf(ImmutableObject.prototype), 'constructor', this).call(this, ImmutableValue[SECRET_KEY]);
	    ImmutableValue.mergeAllPropertiesInto(this, arguments);
	    if (true) {
	      ImmutableValue.deepFreezeRootNode(this);
	    }
	  }

	  /**
	   * DEPRECATED - prefer to instantiate with new ImmutableObject().
	   *
	   * @arguments {array<object>} The arguments is an array of objects that, when
	   * merged together, will form the immutable objects.
	   */

	  _createClass(ImmutableObject, null, [{
	    key: 'create',
	    value: function create() {
	      var obj = Object.create(ImmutableObject.prototype);
	      ImmutableObject.apply(obj, arguments);
	      return obj;
	    }

	    /**
	     * Returns a new `ImmutableValue` that is identical to the supplied
	     * `ImmutableValue` but with the specified changes, `put`. Any keys that are
	     * in the intersection of `immutable` and `put` retain the ordering of
	     * `immutable`. New keys are placed after keys that exist in `immutable`.
	     *
	     * @param {ImmutableValue} immutable Starting object.
	     * @param {?object} put Fields to merge into the object.
	     * @return {ImmutableValue} The result of merging in `put` fields.
	     */
	  }, {
	    key: 'set',
	    value: function set(immutable, put) {
	      assertImmutable(immutable);
	      invariant(typeof put === 'object' && put !== undefined && !Array.isArray(put), 'Invalid ImmutableMap.set argument `put`');
	      return new ImmutableObject(immutable, put);
	    }

	    /**
	     * Sugar for `ImmutableObject.set(ImmutableObject, {fieldName: putField})`.
	     * Look out for key crushing: Use `keyOf()` to guard against it.
	     *
	     * @param {ImmutableValue} immutableObject Object on which to set properties.
	     * @param {string} fieldName Name of the field to set.
	     * @param {*} putField Value of the field to set.
	     * @return {ImmutableValue} new ImmutableValue as described in `set`.
	     */
	  }, {
	    key: 'setProperty',
	    value: function setProperty(immutableObject, fieldName, putField) {
	      var put = {};
	      put[fieldName] = putField;
	      return ImmutableObject.set(immutableObject, put);
	    }

	    /**
	     * Returns a new immutable object with the given field name removed.
	     * Look out for key crushing: Use `keyOf()` to guard against it.
	     *
	     * @param {ImmutableObject} immutableObject from which to delete the key.
	     * @param {string} droppedField Name of the field to delete.
	     * @return {ImmutableObject} new ImmutableObject without the key
	     */
	  }, {
	    key: 'deleteProperty',
	    value: function deleteProperty(immutableObject, droppedField) {
	      var copy = {};
	      for (var key in immutableObject) {
	        if (key !== droppedField && immutableObject.hasOwnProperty(key)) {
	          copy[key] = immutableObject[key];
	        }
	      }
	      return new ImmutableObject(copy);
	    }

	    /**
	     * Returns a new `ImmutableValue` that is identical to the supplied object but
	     * with the supplied changes recursively applied.
	     *
	     * Experimental. Likely does not handle `Arrays` correctly.
	     *
	     * @param {ImmutableValue} immutable Object on which to set fields.
	     * @param {object} put Fields to merge into the object.
	     * @return {ImmutableValue} The result of merging in `put` fields.
	     */
	  }, {
	    key: 'setDeep',
	    value: function setDeep(immutable, put) {
	      assertImmutable(immutable);
	      return _setDeep(immutable, put);
	    }

	    /**
	     * Retrieves an ImmutableObject's values as an array.
	     *
	     * @param {ImmutableValue} immutable
	     * @return {array}
	     */
	  }, {
	    key: 'values',
	    value: function values(immutable) {
	      return Object.keys(immutable).map(function (key) {
	        return immutable[key];
	      });
	    }
	  }]);

	  return ImmutableObject;
	})(ImmutableValue);

	function _setDeep(obj, put) {
	  checkMergeObjectArgs(obj, put);
	  var totalNewFields = {};

	  // To maintain the order of the keys, copy the base object's entries first.
	  var keys = Object.keys(obj);
	  for (var ii = 0; ii < keys.length; ii++) {
	    var key = keys[ii];
	    if (!put.hasOwnProperty(key)) {
	      totalNewFields[key] = obj[key];
	    } else if (isTerminal(obj[key]) || isTerminal(put[key])) {
	      totalNewFields[key] = put[key];
	    } else {
	      totalNewFields[key] = _setDeep(obj[key], put[key]);
	    }
	  }

	  // Apply any new keys that the base obj didn't have.
	  var newKeys = Object.keys(put);
	  for (ii = 0; ii < newKeys.length; ii++) {
	    var newKey = newKeys[ii];
	    if (obj.hasOwnProperty(newKey)) {
	      continue;
	    }
	    totalNewFields[newKey] = put[newKey];
	  }

	  return obj instanceof ImmutableValue ? new ImmutableObject(totalNewFields) : put instanceof ImmutableValue ? new ImmutableObject(totalNewFields) : totalNewFields;
	}

	module.exports = ImmutableObject;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ImmutableValue
	 * @typechecks
	 */

	'use strict';

	var invariant = __webpack_require__(53);
	var isNode = __webpack_require__(63);
	var keyOf = __webpack_require__(64);

	var SECRET_KEY = keyOf({ _DONT_EVER_TYPE_THIS_SECRET_KEY: null });

	/**
	 * `ImmutableValue` provides a guarantee of immutability at developer time when
	 * strict mode is used. The extra computations required to enforce immutability
	 * are stripped out in production for performance reasons. `ImmutableValue`
	 * guarantees to enforce immutability for enumerable, own properties. This
	 * allows easy wrapping of `ImmutableValue` with the ability to store
	 * non-enumerable properties on the instance that only your static methods
	 * reason about. In order to achieve IE8 compatibility (which doesn't have the
	 * ability to define non-enumerable properties), modules that want to build
	 * their own reasoning of `ImmutableValue`s and store computations can define
	 * their non-enumerable properties under the name `toString`, and in IE8 only
	 * define a standard property called `toString` which will mistakenly be
	 * considered not enumerable due to its name (but only in IE8). The only
	 * limitation is that no one can store their own `toString` property.
	 * https://developer.mozilla.org/en-US/docs/ECMAScript_DontEnum_attribute#JScript_DontEnum_Bug
	 */

	var ImmutableValue = (function () {
	  /**
	   * An instance of `ImmutableValue` appears to be a plain JavaScript object,
	   * except `instanceof ImmutableValue` evaluates to `true`, and it is deeply
	   * frozen in development mode.
	   *
	   * @param {number} secret Ensures this isn't accidentally constructed outside
	   * of convenience constructors. If created outside of a convenience
	   * constructor, may not be frozen. Forbidding that use case for now until we
	   * have a better API.
	   */

	  function ImmutableValue(secret) {
	    _classCallCheck(this, ImmutableValue);

	    invariant(secret === ImmutableValue[SECRET_KEY], 'Only certain classes should create instances of `ImmutableValue`.' + 'You probably want something like ImmutableValueObject.create.');
	  }

	  /**
	   * Helper method for classes that make use of `ImmutableValue`.
	   * @param {ImmutableValue} destination Object to merge properties into.
	   * @param {object} propertyObjects List of objects to merge into
	   * `destination`.
	   */

	  _createClass(ImmutableValue, null, [{
	    key: 'mergeAllPropertiesInto',
	    value: function mergeAllPropertiesInto(destination, propertyObjects) {
	      var argLength = propertyObjects.length;
	      for (var i = 0; i < argLength; i++) {
	        _extends(destination, propertyObjects[i]);
	      }
	    }

	    /**
	     * Freezes the supplied object deeply. Other classes may implement their own
	     * version based on this.
	     *
	     * @param {*} object The object to freeze.
	     */
	  }, {
	    key: 'deepFreezeRootNode',
	    value: function deepFreezeRootNode(object) {
	      if (isNode(object)) {
	        return; // Don't try to freeze DOM nodes.
	      }
	      Object.freeze(object); // First freeze the object.
	      for (var prop in object) {
	        if (object.hasOwnProperty(prop)) {
	          ImmutableValue.recurseDeepFreeze(object[prop]);
	        }
	      }
	      Object.seal(object);
	    }

	    /**
	     * Differs from `deepFreezeRootNode`, in that we first check if this is a
	     * necessary recursion. If the object is already an `ImmutableValue`, then the
	     * recursion is unnecessary as it is already frozen. That check obviously
	     * wouldn't work for the root node version `deepFreezeRootNode`!
	     */
	  }, {
	    key: 'recurseDeepFreeze',
	    value: function recurseDeepFreeze(object) {
	      if (isNode(object) || !ImmutableValue.shouldRecurseFreeze(object)) {
	        return; // Don't try to freeze DOM nodes.
	      }
	      Object.freeze(object); // First freeze the object.
	      for (var prop in object) {
	        if (object.hasOwnProperty(prop)) {
	          ImmutableValue.recurseDeepFreeze(object[prop]);
	        }
	      }
	      Object.seal(object);
	    }

	    /**
	     * Checks if an object should be deep frozen. Instances of `ImmutableValue`
	     * are assumed to have already been deep frozen, so we can have large
	     * `__DEV__` time savings by skipping freezing of them.
	     *
	     * @param {*} object The object to check.
	     * @return {boolean} Whether or not deep freeze is needed.
	     */
	  }, {
	    key: 'shouldRecurseFreeze',
	    value: function shouldRecurseFreeze(object) {
	      return typeof object === 'object' && !(object instanceof ImmutableValue) && object !== null;
	    }
	  }]);

	  return ImmutableValue;
	})();

	ImmutableValue._DONT_EVER_TYPE_THIS_SECRET_KEY = Math.random();

	module.exports = ImmutableValue;

/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	'use strict';

	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mergeHelpers
	 *
	 * requiresPolyfills: Array.isArray
	 */

	'use strict';

	var invariant = __webpack_require__(53);
	var keyMirror = __webpack_require__(66);

	/**
	 * Maximum number of levels to traverse. Will catch circular structures.
	 * @const
	 */
	var MAX_MERGE_DEPTH = 36;

	/**
	 * We won't worry about edge cases like new String('x') or new Boolean(true).
	 * Functions and Dates are considered terminals, and arrays are not.
	 * @param {*} o The item/object/value to test.
	 * @return {boolean} true iff the argument is a terminal.
	 */
	var isTerminal = function isTerminal(o) {
	  return typeof o !== 'object' || o instanceof Date || o === null;
	};

	var mergeHelpers = {

	  MAX_MERGE_DEPTH: MAX_MERGE_DEPTH,

	  isTerminal: isTerminal,

	  /**
	   * Converts null/undefined values into empty object.
	   *
	   * @param {?Object=} arg Argument to be normalized (nullable optional)
	   * @return {!Object}
	   */
	  normalizeMergeArg: function normalizeMergeArg(arg) {
	    return arg === undefined || arg === null ? {} : arg;
	  },

	  /**
	   * If merging Arrays, a merge strategy *must* be supplied. If not, it is
	   * likely the caller's fault. If this function is ever called with anything
	   * but `one` and `two` being `Array`s, it is the fault of the merge utilities.
	   *
	   * @param {*} one Array to merge into.
	   * @param {*} two Array to merge from.
	   */
	  checkMergeArrayArgs: function checkMergeArrayArgs(one, two) {
	    invariant(Array.isArray(one) && Array.isArray(two), 'Tried to merge arrays, instead got %s and %s.', one, two);
	  },

	  /**
	   * @param {*} one Object to merge into.
	   * @param {*} two Object to merge from.
	   */
	  checkMergeObjectArgs: function checkMergeObjectArgs(one, two) {
	    mergeHelpers.checkMergeObjectArg(one);
	    mergeHelpers.checkMergeObjectArg(two);
	  },

	  /**
	   * @param {*} arg
	   */
	  checkMergeObjectArg: function checkMergeObjectArg(arg) {
	    invariant(!isTerminal(arg) && !Array.isArray(arg), 'Tried to merge an object, instead got %s.', arg);
	  },

	  /**
	   * @param {*} arg
	   */
	  checkMergeIntoObjectArg: function checkMergeIntoObjectArg(arg) {
	    invariant((!isTerminal(arg) || typeof arg === 'function') && !Array.isArray(arg), 'Tried to merge into an object, instead got %s.', arg);
	  },

	  /**
	   * Checks that a merge was not given a circular object or an object that had
	   * too great of depth.
	   *
	   * @param {number} Level of recursion to validate against maximum.
	   */
	  checkMergeLevel: function checkMergeLevel(level) {
	    invariant(level < MAX_MERGE_DEPTH, 'Maximum deep merge depth exceeded. You may be attempting to merge ' + 'circular structures in an unsupported way.');
	  },

	  /**
	   * Checks that the supplied merge strategy is valid.
	   *
	   * @param {string} Array merge strategy.
	   */
	  checkArrayStrategy: function checkArrayStrategy(strategy) {
	    invariant(strategy === undefined || strategy in mergeHelpers.ArrayStrategies, 'You must provide an array strategy to deep merge functions to ' + 'instruct the deep merge how to resolve merging two arrays.');
	  },

	  /**
	   * Set of possible behaviors of merge algorithms when encountering two Arrays
	   * that must be merged together.
	   * - `clobber`: The left `Array` is ignored.
	   * - `indexByIndex`: The result is achieved by recursively deep merging at
	   *   each index. (not yet supported.)
	   */
	  ArrayStrategies: keyMirror({
	    Clobber: true,
	    IndexByIndex: true
	  })

	};

	module.exports = mergeHelpers;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */

	'use strict';

	var invariant = __webpack_require__(53);

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  invariant(obj instanceof Object && !Array.isArray(obj), 'keyMirror(...): Argument must be an object.');
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableCell.react
	 * @typechecks
	 */

	'use strict';

	var FixedDataTableHelper = __webpack_require__(27);
	var ImmutableObject = __webpack_require__(61);
	var React = __webpack_require__(29);
	var ReactComponentWithPureRenderMixin = __webpack_require__(33);
	var cx = __webpack_require__(48);
	var joinClasses = __webpack_require__(68);

	var DIR_SIGN = FixedDataTableHelper.DIR_SIGN;

	var PropTypes = React.PropTypes;

	var DEFAULT_PROPS = new ImmutableObject({
	  align: 'left',
	  highlighted: false,
	  isFooterCell: false,
	  isHeaderCell: false
	});

	var FixedDataTableCell = React.createClass({
	  displayName: 'FixedDataTableCell',

	  mixins: [ReactComponentWithPureRenderMixin],

	  propTypes: {
	    align: PropTypes.oneOf(['left', 'center', 'right']),
	    className: PropTypes.string,
	    highlighted: PropTypes.bool,
	    isFooterCell: PropTypes.bool,
	    isHeaderCell: PropTypes.bool,
	    width: PropTypes.number.isRequired,
	    minWidth: PropTypes.number,
	    maxWidth: PropTypes.number,
	    height: PropTypes.number.isRequired,

	    /**
	     * The cell data that will be passed to `cellRenderer` to render.
	     */
	    cellData: PropTypes.any,

	    /**
	     * The key to retrieve the cell data from the `rowData`.
	     */
	    cellDataKey: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),

	    /**
	     * The function to render the `cellData`.
	     */
	    cellRenderer: PropTypes.func.isRequired,

	    /**
	     * The column data that will be passed to `cellRenderer` to render.
	     */
	    columnData: PropTypes.any,

	    /**
	     * The row data that will be passed to `cellRenderer` to render.
	     */
	    rowData: PropTypes.oneOfType([PropTypes.object.isRequired, PropTypes.array.isRequired]),

	    /**
	     * The row index that will be passed to `cellRenderer` to render.
	     */
	    rowIndex: PropTypes.number.isRequired,

	    /**
	     * Callback for when resizer knob (in FixedDataTableCell) is clicked
	     * to initialize resizing. Please note this is only on the cells
	     * in the header.
	     * @param number combinedWidth
	     * @param number left
	     * @param number width
	     * @param number minWidth
	     * @param number maxWidth
	     * @param number|string columnKey
	     * @param object event
	     */
	    onColumnResize: PropTypes.func,

	    /**
	     * The left offset in pixels of the cell.
	     */
	    left: PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() /*object*/{
	    return DEFAULT_PROPS;
	  },

	  render: function render() /*object*/{
	    var props = this.props;

	    var style = {
	      height: props.height,
	      width: props.width
	    };
	    if (DIR_SIGN === 1) {
	      style.left = props.left;
	    } else {
	      style.right = props.left;
	    }

	    var className = joinClasses(cx({
	      'fixedDataTableCellLayout/main': true,
	      'fixedDataTableCellLayout/lastChild': props.lastChild,
	      'fixedDataTableCellLayout/alignRight': props.align === 'right',
	      'fixedDataTableCellLayout/alignCenter': props.align === 'center',
	      'public/fixedDataTableCell/alignRight': props.align === 'right',
	      'public/fixedDataTableCell/highlighted': props.highlighted,
	      'public/fixedDataTableCell/main': true
	    }), props.className);

	    var content;
	    if (props.isHeaderCell || props.isFooterCell) {
	      content = props.cellRenderer(props.cellData, props.cellDataKey, props.columnData, props.rowData, props.width);
	    } else {
	      content = props.cellRenderer(props.cellData, props.cellDataKey, props.rowData, props.rowIndex, props.columnData, props.width);
	    }

	    var contentClass = cx('public/fixedDataTableCell/cellContent');
	    if (React.isValidElement(content)) {
	      content = React.cloneElement(content, {
	        className: joinClasses(content.props.className, contentClass)
	      });
	    } else {
	      content = React.createElement(
	        'div',
	        { className: contentClass },
	        content
	      );
	    }

	    var columnResizerComponent;
	    if (props.onColumnResize) {
	      var columnResizerStyle = {
	        height: props.height
	      };
	      columnResizerComponent = React.createElement(
	        'div',
	        {
	          className: cx('fixedDataTableCellLayout/columnResizerContainer'),
	          style: columnResizerStyle,
	          onMouseDown: this._onColumnResizerMouseDown },
	        React.createElement('div', {
	          className: joinClasses(cx('fixedDataTableCellLayout/columnResizerKnob'), cx('public/fixedDataTableCell/columnResizerKnob')),
	          style: columnResizerStyle
	        })
	      );
	    }

	    var innerStyle = {
	      height: props.height,
	      width: props.width
	    };

	    return React.createElement(
	      'div',
	      { className: className, style: style },
	      columnResizerComponent,
	      React.createElement(
	        'div',
	        {
	          className: joinClasses(cx('fixedDataTableCellLayout/wrap1'), cx('public/fixedDataTableCell/wrap1')),
	          style: innerStyle },
	        React.createElement(
	          'div',
	          {
	            className: joinClasses(cx('fixedDataTableCellLayout/wrap2'), cx('public/fixedDataTableCell/wrap2')) },
	          React.createElement(
	            'div',
	            {
	              className: joinClasses(cx('fixedDataTableCellLayout/wrap3'), cx('public/fixedDataTableCell/wrap3')) },
	            content
	          )
	        )
	      )
	    );
	  },

	  _onColumnResizerMouseDown: function _onColumnResizerMouseDown( /*object*/event) {
	    this.props.onColumnResize(this.props.left, this.props.width, this.props.minWidth, this.props.maxWidth, this.props.cellDataKey, event);
	  }
	});

	module.exports = FixedDataTableCell;

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */
	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _DragDropContext = __webpack_require__(71);

	exports.DragDropContext = _interopRequire(_DragDropContext);

	var _DragLayer = __webpack_require__(122);

	exports.DragLayer = _interopRequire(_DragLayer);

	var _DragSource = __webpack_require__(133);

	exports.DragSource = _interopRequire(_DragSource);

	var _DropTarget = __webpack_require__(148);

	exports.DropTarget = _interopRequire(_DropTarget);

	if (process.env.NODE_ENV !== 'production') {
	  Object.defineProperty(exports, 'default', {
	    get: function get() {
	      console.error('React DnD does not provide a default export. ' + 'You are probably missing the curly braces in the import statement. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#react-dnd-does-not-provide-a-default-export');
	    }
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 70 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _slice = Array.prototype.slice;
	exports['default'] = DragDropContext;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(30);

	var _react2 = _interopRequireDefault(_react);

	var _dndCore = __webpack_require__(72);

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(121);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragDropContext(backend) {
	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragDropContext', 'backend'].concat(_slice.call(arguments)));

	  // Auto-detect ES6 default export for people still using ES5
	  if (typeof backend === 'object' && typeof backend['default'] === 'function') {
	    backend = backend['default'];
	  }
	  (0, _invariant2['default'])(typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html');

	  var childContext = {
	    dragDropManager: new _dndCore.DragDropManager(backend)
	  };

	  return function decorateContext(DecoratedComponent) {
	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      function DragDropContextContainer() {
	        _classCallCheck(this, DragDropContextContainer);

	        if (_Component != null) {
	          _Component.apply(this, arguments);
	        }
	      }

	      _inherits(DragDropContextContainer, _Component);

	      DragDropContextContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragDropContextContainer.prototype.getManager = function getManager() {
	        return childContext.dragDropManager;
	      };

	      DragDropContextContainer.prototype.getChildContext = function getChildContext() {
	        return childContext;
	      };

	      DragDropContextContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, {
	          ref: 'child' }));
	      };

	      _createClass(DragDropContextContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragDropContext(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'childContextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      return DragDropContextContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	exports.__esModule = true;

	var _default = __webpack_require__(73);

	exports.DragDropManager = _interopRequire(_default);

	var _default2 = __webpack_require__(117);

	exports.DragSource = _interopRequire(_default2);

	var _default3 = __webpack_require__(118);

	exports.DropTarget = _interopRequire(_default3);

	var _default4 = __webpack_require__(119);

	exports.createTestBackend = _interopRequire(_default4);

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _Flux = __webpack_require__(74);

	var _Flux2 = _interopRequireWildcard(_Flux);

	var _DragDropMonitor = __webpack_require__(113);

	var _DragDropMonitor2 = _interopRequireWildcard(_DragDropMonitor);

	var _HandlerRegistry = __webpack_require__(114);

	var _HandlerRegistry2 = _interopRequireWildcard(_HandlerRegistry);

	var DragDropManager = (function () {
	  function DragDropManager(createBackend) {
	    _classCallCheck(this, DragDropManager);

	    var flux = new _Flux2['default'](this);

	    this.flux = flux;
	    this.registry = new _HandlerRegistry2['default'](flux.registryActions);
	    this.monitor = new _DragDropMonitor2['default'](flux, this.registry);
	    this.backend = createBackend(this);

	    flux.refCountStore.addListener('change', this.handleRefCountChange, this);
	  }

	  DragDropManager.prototype.handleRefCountChange = function handleRefCountChange() {
	    var shouldSetUp = this.flux.refCountStore.hasRefs();
	    if (shouldSetUp && !this.isSetUp) {
	      this.backend.setup();
	      this.isSetUp = true;
	    } else if (!shouldSetUp && this.isSetUp) {
	      this.backend.teardown();
	      this.isSetUp = false;
	    }
	  };

	  DragDropManager.prototype.getMonitor = function getMonitor() {
	    return this.monitor;
	  };

	  DragDropManager.prototype.getBackend = function getBackend() {
	    return this.backend;
	  };

	  DragDropManager.prototype.getRegistry = function getRegistry() {
	    return this.registry;
	  };

	  DragDropManager.prototype.getActions = function getActions() {
	    return this.flux.dragDropActions;
	  };

	  return DragDropManager;
	})();

	exports['default'] = DragDropManager;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	exports.__esModule = true;

	var _Flummox2 = __webpack_require__(75);

	var _DragDropActions = __webpack_require__(84);

	var _DragDropActions2 = _interopRequireWildcard(_DragDropActions);

	var _RegistryActions = __webpack_require__(93);

	var _RegistryActions2 = _interopRequireWildcard(_RegistryActions);

	var _DragOperationStore = __webpack_require__(94);

	var _DragOperationStore2 = _interopRequireWildcard(_DragOperationStore);

	var _DragOffsetStore = __webpack_require__(111);

	var _DragOffsetStore2 = _interopRequireWildcard(_DragOffsetStore);

	var _RefCountStore = __webpack_require__(112);

	var _RefCountStore2 = _interopRequireWildcard(_RefCountStore);

	var Flux = (function (_Flummox) {
	  function Flux(manager) {
	    _classCallCheck(this, Flux);

	    _Flummox.call(this);

	    this.dragDropActions = this.createActions('dragDropActions', _DragDropActions2['default'], manager);
	    this.dragDropActionIds = this.getActionIds('dragDropActions');

	    this.registryActions = this.createActions('registryActions', _RegistryActions2['default']);
	    this.registryActionIds = this.getActionIds('registryActions');

	    this.dragOperationStore = this.createStore('dragOperationStore', _DragOperationStore2['default'], this);

	    this.dragOffsetStore = this.createStore('dragOffsetStore', _DragOffsetStore2['default'], this);

	    this.refCountStore = this.createStore('refCountStore', _RefCountStore2['default'], this);
	  }

	  _inherits(Flux, _Flummox);

	  return Flux;
	})(_Flummox2.Flummox);

	exports['default'] = Flux;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _applyConstructor = function (Constructor, args) { var instance = Object.create(Constructor.prototype); var result = Constructor.apply(instance, args); return result != null && (typeof result == "object" || typeof result == "function") ? result : instance; };

	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	/**
	 * Flux
	 *
	 * The main Flux class.
	 */

	var Store = _interopRequire(__webpack_require__(76));

	var Actions = _interopRequire(__webpack_require__(79));

	var Dispatcher = __webpack_require__(81).Dispatcher;
	var EventEmitter = _interopRequire(__webpack_require__(77));

	var Flux = (function (EventEmitter) {
	  function Flux() {
	    _classCallCheck(this, Flux);

	    this.dispatcher = new Dispatcher();

	    this._stores = {};
	    this._actions = {};
	  }

	  _inherits(Flux, EventEmitter);

	  _prototypeProperties(Flux, null, {
	    createStore: {
	      value: function createStore(key, _Store) {
	        for (var _len = arguments.length, constructorArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          constructorArgs[_key - 2] = arguments[_key];
	        }

	        if (!(_Store.prototype instanceof Store)) {
	          var className = getClassName(_Store);

	          throw new Error("You've attempted to create a store from the class " + className + ", which " + "does not have the base Store class in its prototype chain. Make sure " + ("you're using the `extends` keyword: `class " + className + " extends ") + "Store { ... }`");
	        }

	        if (this._stores.hasOwnProperty(key) && this._stores[key]) {
	          throw new Error("You've attempted to create multiple stores with key " + key + ". Keys must " + "be unique.");
	        }

	        var store = _applyConstructor(_Store, constructorArgs);
	        var token = this.dispatcher.register(store.handler.bind(store));

	        store._waitFor = this.waitFor.bind(this);
	        store._token = token;

	        this._stores[key] = store;

	        return store;
	      },
	      writable: true,
	      configurable: true
	    },
	    getStore: {
	      value: function getStore(key) {
	        return this._stores.hasOwnProperty(key) ? this._stores[key] : undefined;
	      },
	      writable: true,
	      configurable: true
	    },
	    createActions: {
	      value: function createActions(key, _Actions) {
	        for (var _len = arguments.length, constructorArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	          constructorArgs[_key - 2] = arguments[_key];
	        }

	        if (!(_Actions.prototype instanceof Actions) && _Actions !== Actions) {
	          var className = getClassName(_Actions);

	          throw new Error("You've attempted to create actions from the class " + className + ", which " + "does not have the base Actions class in its prototype chain. Make " + ("sure you're using the `extends` keyword: `class " + className + " ") + "extends Actions { ... }`");
	        }

	        if (this._actions.hasOwnProperty(key) && this._actions[key]) {
	          throw new Error("You've attempted to create multiple actions with key " + key + ". Keys " + "must be unique.");
	        }

	        var actions = _applyConstructor(_Actions, constructorArgs);
	        actions.dispatch = this.dispatch.bind(this);
	        actions.dispatchAsync = this.dispatchAsync.bind(this);

	        this._actions[key] = actions;

	        return actions;
	      },
	      writable: true,
	      configurable: true
	    },
	    getActions: {
	      value: function getActions(key) {
	        return this._actions.hasOwnProperty(key) ? this._actions[key] : undefined;
	      },
	      writable: true,
	      configurable: true
	    },
	    getActionIds: {
	      value: function getActionIds(key) {
	        var actions = this.getActions(key);

	        if (!actions) {
	          return;
	        }return actions.getConstants();
	      },
	      writable: true,
	      configurable: true
	    },
	    dispatch: {
	      value: function dispatch(actionId, body) {
	        this._dispatch({ actionId: actionId, body: body });
	      },
	      writable: true,
	      configurable: true
	    },
	    dispatchAsync: {
	      value: function dispatchAsync(actionId, promise, actionArgs) {
	        var _this = this;
	        var payload = {
	          actionId: actionId,
	          async: "begin" };

	        if (actionArgs) payload.actionArgs = actionArgs;

	        this._dispatch(payload);

	        return promise.then(function (body) {
	          _this._dispatch({
	            actionId: actionId,
	            body: body,
	            async: "success"
	          });

	          return body;
	        }, function (error) {
	          _this._dispatch({
	            actionId: actionId,
	            error: error,
	            async: "failure" });

	          return Promise.reject(error);
	        })["catch"](function (error) {
	          _this.emit("error", error);

	          return Promise.reject(error);
	        });
	      },
	      writable: true,
	      configurable: true
	    },
	    _dispatch: {
	      value: function _dispatch(payload) {
	        this.dispatcher.dispatch(payload);
	        this.emit("dispatch", payload);
	      },
	      writable: true,
	      configurable: true
	    },
	    waitFor: {
	      value: function waitFor(tokensOrStores) {
	        if (!Array.isArray(tokensOrStores)) tokensOrStores = [tokensOrStores];

	        var ensureIsToken = function (tokenOrStore) {
	          return tokenOrStore instanceof Store ? tokenOrStore._token : tokenOrStore;
	        };

	        var tokens = tokensOrStores.map(ensureIsToken);

	        this.dispatcher.waitFor(tokens);
	      },
	      writable: true,
	      configurable: true
	    },
	    removeAllStoreListeners: {
	      value: function removeAllStoreListeners(event) {
	        for (var key in this._stores) {
	          if (!this._stores.hasOwnProperty(key)) continue;

	          var store = this._stores[key];

	          store.removeAllListeners(event);
	        }
	      },
	      writable: true,
	      configurable: true
	    },
	    serialize: {
	      value: function serialize() {
	        var stateTree = {};

	        for (var key in this._stores) {
	          if (!this._stores.hasOwnProperty(key)) continue;

	          var store = this._stores[key];

	          var serialize = store.constructor.serialize;

	          if (typeof serialize !== "function") continue;

	          var serializedStoreState = serialize(store.state);

	          if (typeof serializedStoreState !== "string") {
	            var className = store.constructor.name;

	            if (process.env.NODE_ENV !== "production") {
	              console.warn("The store with key '" + key + "' was not serialized because the static " + ("method `" + className + ".serialize()` returned a non-string with type ") + ("'" + typeof serializedStoreState + "'."));
	            }
	          }

	          stateTree[key] = serializedStoreState;

	          if (typeof store.constructor.deserialize !== "function") {
	            var className = store.constructor.name;

	            if (process.env.NODE_ENV !== "production") {
	              console.warn("The class `" + className + "` has a `serialize()` method, but no " + "corresponding `deserialize()` method.");
	            }
	          }
	        }

	        return JSON.stringify(stateTree);
	      },
	      writable: true,
	      configurable: true
	    },
	    deserialize: {
	      value: function deserialize(serializedState) {
	        var stateMap = undefined;

	        try {
	          stateMap = JSON.parse(serializedState);
	        } catch (error) {
	          var className = this.constructor.name;

	          if (process.env.NODE_ENV !== "production") {
	            throw new Error("Invalid value passed to `" + className + "#deserialize()`: " + ("" + serializedState));
	          }
	        }

	        for (var key in this._stores) {
	          if (!this._stores.hasOwnProperty(key)) continue;

	          var store = this._stores[key];

	          var deserialize = store.constructor.deserialize;

	          if (typeof deserialize !== "function") continue;

	          var storeStateString = stateMap[key];
	          var storeState = deserialize(storeStateString);

	          store.replaceState(storeState);

	          if (typeof store.constructor.serialize !== "function") {
	            var className = store.constructor.name;

	            if (process.env.NODE_ENV !== "production") {
	              console.warn("The class `" + className + "` has a `deserialize()` method, but no " + "corresponding `serialize()` method.");
	            }
	          }
	        }
	      },
	      writable: true,
	      configurable: true
	    }
	  });

	  return Flux;
	})(EventEmitter);

	exports["default"] = Flux;


	// Aliases
	Flux.prototype.getConstants = Flux.prototype.getActionIds;
	Flux.prototype.dehydrate = Flux.prototype.serialize;
	Flux.prototype.hydrate = Flux.prototype.deserialize;

	function getClassName(Class) {
	  return Class.prototype.constructor.name;
	}

	var Flummox = Flux;

	exports.Flux = Flux;
	exports.Flummox = Flummox;
	exports.Store = Store;
	exports.Actions = Actions;
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GbHV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1PLEtBQUssMkJBQU0sU0FBUzs7SUFDcEIsT0FBTywyQkFBTSxXQUFXOztJQUN0QixVQUFVLFdBQVEsTUFBTSxFQUF4QixVQUFVO0lBQ1osWUFBWSwyQkFBTSxlQUFlOztJQUVuQixJQUFJLGNBQVMsWUFBWTtBQUVqQyxXQUZRLElBQUk7MEJBQUosSUFBSTs7QUFHckIsUUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDOztBQUVuQyxRQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztHQUNwQjs7WUFQa0IsSUFBSSxFQUFTLFlBQVk7O3VCQUF6QixJQUFJO0FBU3ZCLGVBQVc7YUFBQSxxQkFBQyxHQUFHLEVBQUUsTUFBTSxFQUFzQjswQ0FBakIsZUFBZTtBQUFmLHlCQUFlOzs7QUFFekMsWUFBSSxFQUFFLE1BQU0sQ0FBQyxTQUFTLFlBQVksS0FBSyxDQUFBLEFBQUMsRUFBRTtBQUN4QyxjQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRXJDLGdCQUFNLElBQUksS0FBSyxDQUNiLHVEQUFxRCxTQUFTLHVGQUNTLG9EQUN0QixTQUFTLGVBQVcsbUJBQ3BELENBQ2xCLENBQUM7U0FDSDs7QUFFRCxZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDekQsZ0JBQU0sSUFBSSxLQUFLLENBQ2IseURBQXVELEdBQUcsZ0NBQzlDLENBQ2IsQ0FBQztTQUNIOztBQUVELFlBQUksS0FBSyxxQkFBTyxNQUFNLEVBQUksZUFBZSxDQUFDLENBQUM7QUFDM0MsWUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7QUFFaEUsYUFBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxhQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7QUFFckIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRTFCLGVBQU8sS0FBSyxDQUFDO09BQ2Q7Ozs7QUFFRCxZQUFRO2FBQUEsa0JBQUMsR0FBRyxFQUFFO0FBQ1osZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztPQUN6RTs7OztBQUVELGlCQUFhO2FBQUEsdUJBQUMsR0FBRyxFQUFFLFFBQVEsRUFBc0I7MENBQWpCLGVBQWU7QUFBZix5QkFBZTs7O0FBRTdDLFlBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxZQUFZLE9BQU8sQ0FBQSxBQUFDLElBQUksUUFBUSxLQUFLLE9BQU8sRUFBRTtBQUNwRSxjQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRXZDLGdCQUFNLElBQUksS0FBSyxDQUNiLHVEQUFxRCxTQUFTLG9GQUNNLHlEQUNkLFNBQVMsT0FBRyw2QkFDdkMsQ0FDNUIsQ0FBQztTQUNIOztBQUVELFlBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzRCxnQkFBTSxJQUFJLEtBQUssQ0FDYiwwREFBd0QsR0FBRyxnQ0FDMUMsQ0FDbEIsQ0FBQztTQUNIOztBQUVELFlBQUksT0FBTyxxQkFBTyxRQUFRLEVBQUksZUFBZSxDQUFDLENBQUM7QUFDL0MsZUFBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxlQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV0RCxZQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQzs7QUFFN0IsZUFBTyxPQUFPLENBQUM7T0FDaEI7Ozs7QUFFRCxjQUFVO2FBQUEsb0JBQUMsR0FBRyxFQUFFO0FBQ2QsZUFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztPQUMzRTs7OztBQUVELGdCQUFZO2FBQUEsc0JBQUMsR0FBRyxFQUFFO0FBQ2hCLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRW5DLFlBQUksQ0FBQyxPQUFPO0FBQUUsaUJBQU87U0FBQSxBQUVyQixPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztPQUMvQjs7OztBQUVELFlBQVE7YUFBQSxrQkFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQ3ZCLFlBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQVIsUUFBUSxFQUFFLElBQUksRUFBSixJQUFJLEVBQUUsQ0FBQyxDQUFDO09BQ3BDOzs7O0FBRUQsaUJBQWE7YUFBQSx1QkFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRTs7QUFDM0MsWUFBSSxPQUFPLEdBQUc7QUFDWixrQkFBUSxFQUFSLFFBQVE7QUFDUixlQUFLLEVBQUUsT0FBTyxFQUNmLENBQUM7O0FBRUYsWUFBSSxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7O0FBRWhELFlBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRXhCLGVBQU8sT0FBTyxDQUNYLElBQUksQ0FDSCxVQUFBLElBQUksRUFBSTtBQUNOLGdCQUFLLFNBQVMsQ0FBQztBQUNiLG9CQUFRLEVBQVIsUUFBUTtBQUNSLGdCQUFJLEVBQUosSUFBSTtBQUNKLGlCQUFLLEVBQUUsU0FBUztXQUNqQixDQUFDLENBQUM7O0FBRUgsaUJBQU8sSUFBSSxDQUFDO1NBQ2IsRUFDRCxVQUFBLEtBQUssRUFBSTtBQUNQLGdCQUFLLFNBQVMsQ0FBQztBQUNiLG9CQUFRLEVBQVIsUUFBUTtBQUNSLGlCQUFLLEVBQUwsS0FBSztBQUNMLGlCQUFLLEVBQUUsU0FBUyxFQUNqQixDQUFDLENBQUM7O0FBRUgsaUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QixDQUNGLFNBQ0ssQ0FBQyxVQUFBLEtBQUssRUFBSTtBQUNkLGdCQUFLLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRTFCLGlCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUIsQ0FBQyxDQUFDO09BQ047Ozs7QUFFRCxhQUFTO2FBQUEsbUJBQUMsT0FBTyxFQUFFO0FBQ2pCLFlBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLFlBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hDOzs7O0FBRUQsV0FBTzthQUFBLGlCQUFDLGNBQWMsRUFBRTtBQUV0QixZQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFdEUsWUFBSSxhQUFhLEdBQUcsVUFBQSxZQUFZLEVBQUk7QUFDbEMsaUJBQU8sWUFBWSxZQUFZLEtBQUssR0FDaEMsWUFBWSxDQUFDLE1BQU0sR0FDbkIsWUFBWSxDQUFDO1NBQ2xCLENBQUM7O0FBRUYsWUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFL0MsWUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7T0FDakM7Ozs7QUFFRCwyQkFBdUI7YUFBQSxpQ0FBQyxLQUFLLEVBQUU7QUFDN0IsYUFBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzVCLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTOztBQUVoRCxjQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUU5QixlQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7T0FDRjs7OztBQUVELGFBQVM7YUFBQSxxQkFBRztBQUNWLFlBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIsYUFBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQzVCLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTOztBQUVoRCxjQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUU5QixjQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQzs7QUFFNUMsY0FBSSxPQUFPLFNBQVMsS0FBSyxVQUFVLEVBQUUsU0FBUzs7QUFFOUMsY0FBSSxvQkFBb0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsRCxjQUFJLE9BQU8sb0JBQW9CLEtBQUssUUFBUSxFQUFFO0FBQzVDLGdCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzs7QUFFdkMsZ0JBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO0FBQ3pDLHFCQUFPLENBQUMsSUFBSSxDQUNWLHlCQUF1QixHQUFHLDhEQUNkLFNBQVMsb0RBQWlELFVBQ2xFLE9BQU8sb0JBQW9CLFFBQUksQ0FDcEMsQ0FBQzthQUNIO1dBQ0Y7O0FBRUQsbUJBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQzs7QUFFdEMsY0FBSSxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtBQUN2RCxnQkFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7O0FBRXZDLGdCQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtBQUN6QyxxQkFBTyxDQUFDLElBQUksQ0FDVixnQkFBZSxTQUFTLG9GQUNpQixDQUMxQyxDQUFDO2FBQ0g7V0FDRjtTQUVGOztBQUVELGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUNsQzs7OztBQUVELGVBQVc7YUFBQSxxQkFBQyxlQUFlLEVBQUU7QUFDM0IsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixZQUFJO0FBQ0Ysa0JBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3hDLENBQUMsT0FBTyxLQUFLLEVBQUU7QUFDZCxjQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzs7QUFFdEMsY0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7QUFDekMsa0JBQU0sSUFBSSxLQUFLLENBQ2IsOEJBQTZCLFNBQVMsK0JBQ25DLGVBQWUsQ0FBRSxDQUNyQixDQUFDO1dBQ0g7U0FDRjs7QUFFRCxhQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDNUIsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVM7O0FBRWhELGNBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTlCLGNBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDOztBQUVoRCxjQUFJLE9BQU8sV0FBVyxLQUFLLFVBQVUsRUFBRSxTQUFTOztBQUVoRCxjQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQyxjQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFL0MsZUFBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFL0IsY0FBSSxPQUFPLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtBQUNyRCxnQkFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7O0FBRXZDLGdCQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtBQUN6QyxxQkFBTyxDQUFDLElBQUksQ0FDVixnQkFBZSxTQUFTLG9GQUNlLENBQ3hDLENBQUM7YUFDSDtXQUNGO1NBQ0Y7T0FDRjs7Ozs7O1NBbFBrQixJQUFJO0dBQVMsWUFBWTs7cUJBQXpCLElBQUk7Ozs7QUF1UHpCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDOztBQUVwRCxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUU7QUFDM0IsU0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Q0FDekM7O0FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDOztRQUdqQixJQUFJLEdBQUosSUFBSTtRQUNKLE9BQU8sR0FBUCxPQUFPO1FBQ1AsS0FBSyxHQUFMLEtBQUs7UUFDTCxPQUFPLEdBQVAsT0FBTyIsImZpbGUiOiJzcmMvRmx1eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmx1eFxuICpcbiAqIFRoZSBtYWluIEZsdXggY2xhc3MuXG4gKi9cblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vU3RvcmUnO1xuaW1wb3J0IEFjdGlvbnMgZnJvbSAnLi9BY3Rpb25zJztcbmltcG9ydCB7IERpc3BhdGNoZXIgfSBmcm9tICdmbHV4JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdXggZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBEaXNwYXRjaGVyKCk7XG5cbiAgICB0aGlzLl9zdG9yZXMgPSB7fTtcbiAgICB0aGlzLl9hY3Rpb25zID0ge307XG4gIH1cblxuICBjcmVhdGVTdG9yZShrZXksIF9TdG9yZSwgLi4uY29uc3RydWN0b3JBcmdzKSB7XG5cbiAgICBpZiAoIShfU3RvcmUucHJvdG90eXBlIGluc3RhbmNlb2YgU3RvcmUpKSB7XG4gICAgICBsZXQgY2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKF9TdG9yZSk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFlvdSd2ZSBhdHRlbXB0ZWQgdG8gY3JlYXRlIGEgc3RvcmUgZnJvbSB0aGUgY2xhc3MgJHtjbGFzc05hbWV9LCB3aGljaCBgXG4gICAgICArIGBkb2VzIG5vdCBoYXZlIHRoZSBiYXNlIFN0b3JlIGNsYXNzIGluIGl0cyBwcm90b3R5cGUgY2hhaW4uIE1ha2Ugc3VyZSBgXG4gICAgICArIGB5b3UncmUgdXNpbmcgdGhlIFxcYGV4dGVuZHNcXGAga2V5d29yZDogXFxgY2xhc3MgJHtjbGFzc05hbWV9IGV4dGVuZHMgYFxuICAgICAgKyBgU3RvcmUgeyAuLi4gfVxcYGBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N0b3Jlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHRoaXMuX3N0b3Jlc1trZXldKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBZb3UndmUgYXR0ZW1wdGVkIHRvIGNyZWF0ZSBtdWx0aXBsZSBzdG9yZXMgd2l0aCBrZXkgJHtrZXl9LiBLZXlzIG11c3QgYFxuICAgICAgKyBgYmUgdW5pcXVlLmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IHN0b3JlID0gbmV3IF9TdG9yZSguLi5jb25zdHJ1Y3RvckFyZ3MpO1xuICAgIGxldCB0b2tlbiA9IHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlcihzdG9yZS5oYW5kbGVyLmJpbmQoc3RvcmUpKTtcblxuICAgIHN0b3JlLl93YWl0Rm9yID0gdGhpcy53YWl0Rm9yLmJpbmQodGhpcyk7XG4gICAgc3RvcmUuX3Rva2VuID0gdG9rZW47XG5cbiAgICB0aGlzLl9zdG9yZXNba2V5XSA9IHN0b3JlO1xuXG4gICAgcmV0dXJuIHN0b3JlO1xuICB9XG5cbiAgZ2V0U3RvcmUoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0b3Jlcy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gdGhpcy5fc3RvcmVzW2tleV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBjcmVhdGVBY3Rpb25zKGtleSwgX0FjdGlvbnMsIC4uLmNvbnN0cnVjdG9yQXJncykge1xuXG4gICAgaWYgKCEoX0FjdGlvbnMucHJvdG90eXBlIGluc3RhbmNlb2YgQWN0aW9ucykgJiYgX0FjdGlvbnMgIT09IEFjdGlvbnMpIHtcbiAgICAgIGxldCBjbGFzc05hbWUgPSBnZXRDbGFzc05hbWUoX0FjdGlvbnMpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBZb3UndmUgYXR0ZW1wdGVkIHRvIGNyZWF0ZSBhY3Rpb25zIGZyb20gdGhlIGNsYXNzICR7Y2xhc3NOYW1lfSwgd2hpY2ggYFxuICAgICAgKyBgZG9lcyBub3QgaGF2ZSB0aGUgYmFzZSBBY3Rpb25zIGNsYXNzIGluIGl0cyBwcm90b3R5cGUgY2hhaW4uIE1ha2UgYFxuICAgICAgKyBgc3VyZSB5b3UncmUgdXNpbmcgdGhlIFxcYGV4dGVuZHNcXGAga2V5d29yZDogXFxgY2xhc3MgJHtjbGFzc05hbWV9IGBcbiAgICAgICsgYGV4dGVuZHMgQWN0aW9ucyB7IC4uLiB9XFxgYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHRoaXMuX2FjdGlvbnNba2V5XSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgWW91J3ZlIGF0dGVtcHRlZCB0byBjcmVhdGUgbXVsdGlwbGUgYWN0aW9ucyB3aXRoIGtleSAke2tleX0uIEtleXMgYFxuICAgICAgKyBgbXVzdCBiZSB1bmlxdWUuYFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgYWN0aW9ucyA9IG5ldyBfQWN0aW9ucyguLi5jb25zdHJ1Y3RvckFyZ3MpO1xuICAgIGFjdGlvbnMuZGlzcGF0Y2ggPSB0aGlzLmRpc3BhdGNoLmJpbmQodGhpcyk7XG4gICAgYWN0aW9ucy5kaXNwYXRjaEFzeW5jID0gdGhpcy5kaXNwYXRjaEFzeW5jLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9hY3Rpb25zW2tleV0gPSBhY3Rpb25zO1xuXG4gICAgcmV0dXJuIGFjdGlvbnM7XG4gIH1cblxuICBnZXRBY3Rpb25zKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkgPyB0aGlzLl9hY3Rpb25zW2tleV0gOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRBY3Rpb25JZHMoa2V5KSB7XG4gICAgbGV0IGFjdGlvbnMgPSB0aGlzLmdldEFjdGlvbnMoa2V5KTtcblxuICAgIGlmICghYWN0aW9ucykgcmV0dXJuO1xuXG4gICAgcmV0dXJuIGFjdGlvbnMuZ2V0Q29uc3RhbnRzKCk7XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb25JZCwgYm9keSkge1xuICAgIHRoaXMuX2Rpc3BhdGNoKHsgYWN0aW9uSWQsIGJvZHkgfSk7XG4gIH1cblxuICBkaXNwYXRjaEFzeW5jKGFjdGlvbklkLCBwcm9taXNlLCBhY3Rpb25BcmdzKSB7XG4gICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICBhY3Rpb25JZCxcbiAgICAgIGFzeW5jOiAnYmVnaW4nLFxuICAgIH07XG5cbiAgICBpZiAoYWN0aW9uQXJncykgcGF5bG9hZC5hY3Rpb25BcmdzID0gYWN0aW9uQXJncztcblxuICAgIHRoaXMuX2Rpc3BhdGNoKHBheWxvYWQpO1xuXG4gICAgcmV0dXJuIHByb21pc2VcbiAgICAgIC50aGVuKFxuICAgICAgICBib2R5ID0+IHtcbiAgICAgICAgICB0aGlzLl9kaXNwYXRjaCh7XG4gICAgICAgICAgICBhY3Rpb25JZCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBhc3luYzogJ3N1Y2Nlc3MnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoKHtcbiAgICAgICAgICAgIGFjdGlvbklkLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICBhc3luYzogJ2ZhaWx1cmUnLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBfZGlzcGF0Y2gocGF5bG9hZCkge1xuICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChwYXlsb2FkKTtcbiAgICB0aGlzLmVtaXQoJ2Rpc3BhdGNoJywgcGF5bG9hZCk7XG4gIH1cblxuICB3YWl0Rm9yKHRva2Vuc09yU3RvcmVzKSB7XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodG9rZW5zT3JTdG9yZXMpKSB0b2tlbnNPclN0b3JlcyA9IFt0b2tlbnNPclN0b3Jlc107XG5cbiAgICBsZXQgZW5zdXJlSXNUb2tlbiA9IHRva2VuT3JTdG9yZSA9PiB7XG4gICAgICByZXR1cm4gdG9rZW5PclN0b3JlIGluc3RhbmNlb2YgU3RvcmVcbiAgICAgICAgPyB0b2tlbk9yU3RvcmUuX3Rva2VuXG4gICAgICAgIDogdG9rZW5PclN0b3JlO1xuICAgIH07XG5cbiAgICBsZXQgdG9rZW5zID0gdG9rZW5zT3JTdG9yZXMubWFwKGVuc3VyZUlzVG9rZW4pO1xuXG4gICAgdGhpcy5kaXNwYXRjaGVyLndhaXRGb3IodG9rZW5zKTtcbiAgfVxuXG4gIHJlbW92ZUFsbFN0b3JlTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3N0b3Jlcykge1xuICAgICAgaWYgKCF0aGlzLl9zdG9yZXMuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG5cbiAgICAgIGxldCBzdG9yZSA9IHRoaXMuX3N0b3Jlc1trZXldO1xuXG4gICAgICBzdG9yZS5yZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBsZXQgc3RhdGVUcmVlID0ge307XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fc3RvcmVzKSB7XG4gICAgICBpZiAoIXRoaXMuX3N0b3Jlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcblxuICAgICAgbGV0IHN0b3JlID0gdGhpcy5fc3RvcmVzW2tleV07XG5cbiAgICAgIGxldCBzZXJpYWxpemUgPSBzdG9yZS5jb25zdHJ1Y3Rvci5zZXJpYWxpemU7XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VyaWFsaXplICE9PSAnZnVuY3Rpb24nKSBjb250aW51ZTtcblxuICAgICAgbGV0IHNlcmlhbGl6ZWRTdG9yZVN0YXRlID0gc2VyaWFsaXplKHN0b3JlLnN0YXRlKTtcblxuICAgICAgaWYgKHR5cGVvZiBzZXJpYWxpemVkU3RvcmVTdGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHN0b3JlLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVGhlIHN0b3JlIHdpdGgga2V5ICcke2tleX0nIHdhcyBub3Qgc2VyaWFsaXplZCBiZWNhdXNlIHRoZSBzdGF0aWMgYFxuICAgICAgICAgICsgYG1ldGhvZCBcXGAke2NsYXNzTmFtZX0uc2VyaWFsaXplKClcXGAgcmV0dXJuZWQgYSBub24tc3RyaW5nIHdpdGggdHlwZSBgXG4gICAgICAgICAgKyBgJyR7dHlwZW9mIHNlcmlhbGl6ZWRTdG9yZVN0YXRlfScuYFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhdGVUcmVlW2tleV0gPSBzZXJpYWxpemVkU3RvcmVTdGF0ZTtcblxuICAgICAgaWYgKHR5cGVvZiBzdG9yZS5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gc3RvcmUuY29uc3RydWN0b3IubmFtZTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBUaGUgY2xhc3MgXFxgJHtjbGFzc05hbWV9XFxgIGhhcyBhIFxcYHNlcmlhbGl6ZSgpXFxgIG1ldGhvZCwgYnV0IG5vIGBcbiAgICAgICAgICArIGBjb3JyZXNwb25kaW5nIFxcYGRlc2VyaWFsaXplKClcXGAgbWV0aG9kLmBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RhdGVUcmVlKTtcbiAgfVxuXG4gIGRlc2VyaWFsaXplKHNlcmlhbGl6ZWRTdGF0ZSkge1xuICAgIGxldCBzdGF0ZU1hcDtcblxuICAgIHRyeSB7XG4gICAgICBzdGF0ZU1hcCA9IEpTT04ucGFyc2Uoc2VyaWFsaXplZFN0YXRlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHZhbHVlIHBhc3NlZCB0byBcXGAke2NsYXNzTmFtZX0jZGVzZXJpYWxpemUoKVxcYDogYFxuICAgICAgICArIGAke3NlcmlhbGl6ZWRTdGF0ZX1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3N0b3Jlcykge1xuICAgICAgaWYgKCF0aGlzLl9zdG9yZXMuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG5cbiAgICAgIGxldCBzdG9yZSA9IHRoaXMuX3N0b3Jlc1trZXldO1xuXG4gICAgICBsZXQgZGVzZXJpYWxpemUgPSBzdG9yZS5jb25zdHJ1Y3Rvci5kZXNlcmlhbGl6ZTtcblxuICAgICAgaWYgKHR5cGVvZiBkZXNlcmlhbGl6ZSAhPT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG5cbiAgICAgIGxldCBzdG9yZVN0YXRlU3RyaW5nID0gc3RhdGVNYXBba2V5XTtcbiAgICAgIGxldCBzdG9yZVN0YXRlID0gZGVzZXJpYWxpemUoc3RvcmVTdGF0ZVN0cmluZyk7XG5cbiAgICAgIHN0b3JlLnJlcGxhY2VTdGF0ZShzdG9yZVN0YXRlKTtcblxuICAgICAgaWYgKHR5cGVvZiBzdG9yZS5jb25zdHJ1Y3Rvci5zZXJpYWxpemUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHN0b3JlLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVGhlIGNsYXNzIFxcYCR7Y2xhc3NOYW1lfVxcYCBoYXMgYSBcXGBkZXNlcmlhbGl6ZSgpXFxgIG1ldGhvZCwgYnV0IG5vIGBcbiAgICAgICAgICArIGBjb3JyZXNwb25kaW5nIFxcYHNlcmlhbGl6ZSgpXFxgIG1ldGhvZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbi8vIEFsaWFzZXNcbkZsdXgucHJvdG90eXBlLmdldENvbnN0YW50cyA9IEZsdXgucHJvdG90eXBlLmdldEFjdGlvbklkcztcbkZsdXgucHJvdG90eXBlLmRlaHlkcmF0ZSA9IEZsdXgucHJvdG90eXBlLnNlcmlhbGl6ZTtcbkZsdXgucHJvdG90eXBlLmh5ZHJhdGUgPSBGbHV4LnByb3RvdHlwZS5kZXNlcmlhbGl6ZTtcblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKENsYXNzKSB7XG4gIHJldHVybiBDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZTtcbn1cblxubGV0IEZsdW1tb3ggPSBGbHV4O1xuXG5leHBvcnQge1xuICBGbHV4LFxuICBGbHVtbW94LFxuICBTdG9yZSxcbiAgQWN0aW9ucyxcbn07XG4iXX0=
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	/**
	 * Store
	 *
	 * Stores hold application state. They respond to actions sent by the dispatcher
	 * and broadcast change events to listeners, so they can grab the latest data.
	 * The key thing to remember is that the only way stores receive information
	 * from the outside world is via the dispatcher.
	 */

	var EventEmitter = _interopRequire(__webpack_require__(77));

	var assign = _interopRequire(__webpack_require__(78));

	var Store = (function (EventEmitter) {
	  /**
	   * Stores are initialized with a reference
	   * @type {Object}
	   */
	  function Store() {
	    _classCallCheck(this, Store);

	    this.state = undefined;

	    this._handlers = {};
	    this._asyncHandlers = {};
	  }

	  _inherits(Store, EventEmitter);

	  _prototypeProperties(Store, null, {
	    getState: {

	      /**
	       * Return a (shallow) copy of the store's internal state, so that it is
	       * protected from mutation by the consumer.
	       * @returns {object}
	       */
	      value: function getState() {
	        return assign({}, this.state);
	      },
	      writable: true,
	      configurable: true
	    },
	    setState: {
	      value: function setState(newState) {
	        if (typeof this.state === "undefined") this.state = {};

	        if (this._isHandlingDispatch) {
	          this._pendingState = assign(this._pendingState, newState);
	          this._emitChangeAfterHandlingDispatch = true;
	        } else {
	          if (process.env.NODE_ENV !== "production") {
	            console.warn("Store#setState() called from outside an action handler. This is likely " + "a mistake. Flux stores should manage their own state.");
	          }

	          this.state = assign({}, this.state, newState);
	          this.emit("change");
	        }
	      },
	      writable: true,
	      configurable: true
	    },
	    replaceState: {
	      value: function replaceState(newState) {
	        if (typeof this.state === "undefined") this.state = {};

	        if (this._isHandlingDispatch) {
	          this._pendingState = assign({}, newState);
	          this._emitChangeAfterHandlingDispatch = true;
	        } else {
	          this.state = assign({}, newState);
	          this.emit("change");
	        }
	      },
	      writable: true,
	      configurable: true
	    },
	    forceUpdate: {
	      value: function forceUpdate() {
	        if (this._isHandlingDispatch) {
	          this._emitChangeAfterHandlingDispatch = true;
	        } else {
	          this.emit("change");
	        }
	      },
	      writable: true,
	      configurable: true
	    },
	    register: {
	      value: function register(actionId, handler) {
	        actionId = ensureActionId(actionId);

	        if (typeof handler !== "function") {
	          return;
	        }this._handlers[actionId] = handler.bind(this);
	      },
	      writable: true,
	      configurable: true
	    },
	    registerAsync: {
	      value: function registerAsync(actionId, beginHandler, successHandler, failureHandler) {
	        actionId = ensureActionId(actionId);

	        var asyncHandlers = {
	          begin: beginHandler,
	          success: successHandler,
	          failure: failureHandler };

	        for (var key in asyncHandlers) {
	          if (!asyncHandlers.hasOwnProperty(key)) continue;

	          var handler = asyncHandlers[key];

	          if (typeof handler === "function") {
	            asyncHandlers[key] = handler.bind(this);
	          } else {
	            delete asyncHandlers[key];
	          }
	        }

	        this._asyncHandlers[actionId] = asyncHandlers;
	      },
	      writable: true,
	      configurable: true
	    },
	    waitFor: {
	      value: function waitFor(tokensOrStores) {
	        this._waitFor(tokensOrStores);
	      },
	      writable: true,
	      configurable: true
	    },
	    handler: {
	      value: function handler(payload) {
	        var body = payload.body;
	        var actionId = payload.actionId;
	        var _async = payload.async;
	        var actionArgs = payload.actionArgs;
	        var error = payload.error;


	        var _handler = this._handlers[actionId];
	        var _asyncHandler = this._asyncHandlers[actionId] && this._asyncHandlers[actionId][_async];

	        if (_async) {
	          switch (_async) {
	            case "begin":
	              if (typeof _asyncHandler === "function") {
	                this._performHandler.apply(this, [_asyncHandler].concat(actionArgs));
	              }
	              return;
	            case "failure":
	              if (typeof _asyncHandler === "function") {
	                this._performHandler(_asyncHandler, error);
	              }
	              return;
	            case "success":
	              if (typeof _asyncHandler === "function") {
	                _handler = _asyncHandler;
	              }
	              break;
	            default:
	              return;
	          }
	        }

	        if (typeof _handler !== "function") {
	          return;
	        }this._performHandler(_handler, body);
	      },
	      writable: true,
	      configurable: true
	    },
	    _performHandler: {
	      value: function _performHandler(_handler) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        this._isHandlingDispatch = true;
	        this._pendingState = assign({}, this.state);
	        this._emitChangeAfterHandlingDispatch = false;

	        try {
	          _handler.apply(this, args);
	        } finally {
	          if (this._emitChangeAfterHandlingDispatch) {
	            this.state = this._pendingState;
	            this.emit("change");
	          }

	          this._isHandlingDispatch = false;
	          this._pendingState = {};
	          this._emitChangeAfterHandlingDispatch = false;
	        }
	      },
	      writable: true,
	      configurable: true
	    }
	  });

	  return Store;
	})(EventEmitter);

	module.exports = Store;


	function ensureActionId(actionOrActionId) {
	  return typeof actionOrActionId === "function" ? actionOrActionId._id : actionOrActionId;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TdG9yZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU08sWUFBWSwyQkFBTSxlQUFlOztJQUNqQyxNQUFNLDJCQUFNLGVBQWU7O0lBRWIsS0FBSyxjQUFTLFlBQVk7Ozs7O0FBTWxDLFdBTlEsS0FBSzswQkFBTCxLQUFLOztBQU90QixRQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQzs7QUFFdkIsUUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsUUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7R0FDMUI7O1lBWGtCLEtBQUssRUFBUyxZQUFZOzt1QkFBMUIsS0FBSztBQWtCeEIsWUFBUTs7Ozs7OzthQUFBLG9CQUFHO0FBQ1QsZUFBTyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUMvQjs7OztBQUVELFlBQVE7YUFBQSxrQkFBQyxRQUFRLEVBQUU7QUFDakIsWUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUV2RCxZQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUM1QixjQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFELGNBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUM7U0FDOUMsTUFBTTtBQUVMLGNBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxFQUFFO0FBQ3pDLG1CQUFPLENBQUMsSUFBSSxDQUNWLHlFQUF5RSxHQUN6RSx1REFBdUQsQ0FDeEQsQ0FBQztXQUNIOztBQUVELGNBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckI7T0FDRjs7OztBQUVELGdCQUFZO2FBQUEsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLFlBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7QUFFdkQsWUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7QUFDNUIsY0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLGNBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLENBQUM7U0FDOUMsTUFBTTtBQUNMLGNBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNsQyxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JCO09BQ0Y7Ozs7QUFFRCxlQUFXO2FBQUEsdUJBQUc7QUFDWixZQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtBQUM1QixjQUFJLENBQUMsZ0NBQWdDLEdBQUcsSUFBSSxDQUFDO1NBQzlDLE1BQU07QUFDTCxjQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JCO09BQ0Y7Ozs7QUFFRCxZQUFRO2FBQUEsa0JBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUMxQixnQkFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFcEMsWUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVO0FBQUUsaUJBQU87U0FBQSxBQUUxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDL0M7Ozs7QUFFRCxpQkFBYTthQUFBLHVCQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNwRSxnQkFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFcEMsWUFBSSxhQUFhLEdBQUc7QUFDbEIsZUFBSyxFQUFFLFlBQVk7QUFDbkIsaUJBQU8sRUFBRSxjQUFjO0FBQ3ZCLGlCQUFPLEVBQUUsY0FBYyxFQUN4QixDQUFDOztBQUVGLGFBQUssSUFBSSxHQUFHLElBQUksYUFBYSxFQUFFO0FBQzdCLGNBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVM7O0FBRWpELGNBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFakMsY0FBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7QUFDakMseUJBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBQ3pDLE1BQU07QUFDTCxtQkFBTyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7V0FDM0I7U0FDRjs7QUFFRCxZQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLGFBQWEsQ0FBQztPQUMvQzs7OztBQUVELFdBQU87YUFBQSxpQkFBQyxjQUFjLEVBQUU7QUFDdEIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztPQUMvQjs7OztBQUVELFdBQU87YUFBQSxpQkFBQyxPQUFPLEVBQUU7WUFFYixJQUFJLEdBS0YsT0FBTyxDQUxULElBQUk7WUFDSixRQUFRLEdBSU4sT0FBTyxDQUpULFFBQVE7WUFDRCxNQUFNLEdBR1gsT0FBTyxDQUhULEtBQUs7WUFDTCxVQUFVLEdBRVIsT0FBTyxDQUZULFVBQVU7WUFDVixLQUFLLEdBQ0gsT0FBTyxDQURULEtBQUs7OztBQUdQLFlBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsWUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFM0MsWUFBSSxNQUFNLEVBQUU7QUFDVixrQkFBUSxNQUFNO0FBQ1osaUJBQUssT0FBTztBQUNWLGtCQUFJLE9BQU8sYUFBYSxLQUFLLFVBQVUsRUFBRTtBQUN2QyxvQkFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7ZUFDdEU7QUFDRCxxQkFBTztBQUFBLEFBQ1QsaUJBQUssU0FBUztBQUNaLGtCQUFJLE9BQU8sYUFBYSxLQUFLLFVBQVUsRUFBRTtBQUN2QyxvQkFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7ZUFDNUM7QUFDRCxxQkFBTztBQUFBLEFBQ1QsaUJBQUssU0FBUztBQUNaLGtCQUFJLE9BQU8sYUFBYSxLQUFLLFVBQVUsRUFBRTtBQUN2Qyx3QkFBUSxHQUFHLGFBQWEsQ0FBQztlQUMxQjtBQUNELG9CQUFNO0FBQUEsQUFDUjtBQUNFLHFCQUFPO0FBQUEsV0FDVjtTQUNGOztBQUVELFlBQUksT0FBTyxRQUFRLEtBQUssVUFBVTtBQUFFLGlCQUFPO1NBQUEsQUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDdEM7Ozs7QUFFRCxtQkFBZTthQUFBLHlCQUFDLFFBQVEsRUFBVzswQ0FBTixJQUFJO0FBQUosY0FBSTs7O0FBQy9CLFlBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7QUFDaEMsWUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxZQUFJLENBQUMsZ0NBQWdDLEdBQUcsS0FBSyxDQUFDOztBQUU5QyxZQUFJO0FBQ0Ysa0JBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVCLFNBQVM7QUFDUixjQUFJLElBQUksQ0FBQyxnQ0FBZ0MsRUFBRTtBQUN6QyxnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ2hDLGdCQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ3JCOztBQUVELGNBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUM7QUFDakMsY0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDeEIsY0FBSSxDQUFDLGdDQUFnQyxHQUFHLEtBQUssQ0FBQztTQUMvQztPQUNGOzs7Ozs7U0ExSmtCLEtBQUs7R0FBUyxZQUFZOztpQkFBMUIsS0FBSzs7O0FBNkoxQixTQUFTLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRTtBQUN4QyxTQUFPLE9BQU8sZ0JBQWdCLEtBQUssVUFBVSxHQUN6QyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQ3BCLGdCQUFnQixDQUFDO0NBQ3RCIiwiZmlsZSI6InNyYy9TdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3RvcmVcbiAqXG4gKiBTdG9yZXMgaG9sZCBhcHBsaWNhdGlvbiBzdGF0ZS4gVGhleSByZXNwb25kIHRvIGFjdGlvbnMgc2VudCBieSB0aGUgZGlzcGF0Y2hlclxuICogYW5kIGJyb2FkY2FzdCBjaGFuZ2UgZXZlbnRzIHRvIGxpc3RlbmVycywgc28gdGhleSBjYW4gZ3JhYiB0aGUgbGF0ZXN0IGRhdGEuXG4gKiBUaGUga2V5IHRoaW5nIHRvIHJlbWVtYmVyIGlzIHRoYXQgdGhlIG9ubHkgd2F5IHN0b3JlcyByZWNlaXZlIGluZm9ybWF0aW9uXG4gKiBmcm9tIHRoZSBvdXRzaWRlIHdvcmxkIGlzIHZpYSB0aGUgZGlzcGF0Y2hlci5cbiAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuXG4gIC8qKlxuICAgKiBTdG9yZXMgYXJlIGluaXRpYWxpemVkIHdpdGggYSByZWZlcmVuY2VcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl9oYW5kbGVycyA9IHt9O1xuICAgIHRoaXMuX2FzeW5jSGFuZGxlcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSAoc2hhbGxvdykgY29weSBvZiB0aGUgc3RvcmUncyBpbnRlcm5hbCBzdGF0ZSwgc28gdGhhdCBpdCBpc1xuICAgKiBwcm90ZWN0ZWQgZnJvbSBtdXRhdGlvbiBieSB0aGUgY29uc3VtZXIuXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlID09PSAndW5kZWZpbmVkJykgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgaWYgKHRoaXMuX2lzSGFuZGxpbmdEaXNwYXRjaCkge1xuICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0gYXNzaWduKHRoaXMuX3BlbmRpbmdTdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgdGhpcy5fZW1pdENoYW5nZUFmdGVySGFuZGxpbmdEaXNwYXRjaCA9IHRydWU7XG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdTdG9yZSNzZXRTdGF0ZSgpIGNhbGxlZCBmcm9tIG91dHNpZGUgYW4gYWN0aW9uIGhhbmRsZXIuIFRoaXMgaXMgbGlrZWx5ICdcbiAgICAgICAgKyAnYSBtaXN0YWtlLiBGbHV4IHN0b3JlcyBzaG91bGQgbWFuYWdlIHRoZWlyIG93biBzdGF0ZS4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5ld1N0YXRlKTtcbiAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyk7XG4gICAgfVxuICB9XG5cbiAgcmVwbGFjZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlID09PSAndW5kZWZpbmVkJykgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgaWYgKHRoaXMuX2lzSGFuZGxpbmdEaXNwYXRjaCkge1xuICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0gYXNzaWduKHt9LCBuZXdTdGF0ZSk7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlQWZ0ZXJIYW5kbGluZ0Rpc3BhdGNoID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZSA9IGFzc2lnbih7fSwgbmV3U3RhdGUpO1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKTtcbiAgICB9XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faXNIYW5kbGluZ0Rpc3BhdGNoKSB7XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlQWZ0ZXJIYW5kbGluZ0Rpc3BhdGNoID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KCdjaGFuZ2UnKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3RlcihhY3Rpb25JZCwgaGFuZGxlcikge1xuICAgIGFjdGlvbklkID0gZW5zdXJlQWN0aW9uSWQoYWN0aW9uSWQpO1xuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLl9oYW5kbGVyc1thY3Rpb25JZF0gPSBoYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICByZWdpc3RlckFzeW5jKGFjdGlvbklkLCBiZWdpbkhhbmRsZXIsIHN1Y2Nlc3NIYW5kbGVyLCBmYWlsdXJlSGFuZGxlcikge1xuICAgIGFjdGlvbklkID0gZW5zdXJlQWN0aW9uSWQoYWN0aW9uSWQpO1xuXG4gICAgbGV0IGFzeW5jSGFuZGxlcnMgPSB7XG4gICAgICBiZWdpbjogYmVnaW5IYW5kbGVyLFxuICAgICAgc3VjY2Vzczogc3VjY2Vzc0hhbmRsZXIsXG4gICAgICBmYWlsdXJlOiBmYWlsdXJlSGFuZGxlcixcbiAgICB9O1xuXG4gICAgZm9yIChsZXQga2V5IGluIGFzeW5jSGFuZGxlcnMpIHtcbiAgICAgIGlmICghYXN5bmNIYW5kbGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcblxuICAgICAgbGV0IGhhbmRsZXIgPSBhc3luY0hhbmRsZXJzW2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhc3luY0hhbmRsZXJzW2tleV0gPSBoYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgYXN5bmNIYW5kbGVyc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FzeW5jSGFuZGxlcnNbYWN0aW9uSWRdID0gYXN5bmNIYW5kbGVycztcbiAgfVxuXG4gIHdhaXRGb3IodG9rZW5zT3JTdG9yZXMpIHtcbiAgICB0aGlzLl93YWl0Rm9yKHRva2Vuc09yU3RvcmVzKTtcbiAgfVxuXG4gIGhhbmRsZXIocGF5bG9hZCkge1xuICAgIGxldCB7XG4gICAgICBib2R5LFxuICAgICAgYWN0aW9uSWQsXG4gICAgICBhc3luYzogX2FzeW5jLFxuICAgICAgYWN0aW9uQXJncyxcbiAgICAgIGVycm9yXG4gICAgfSA9IHBheWxvYWQ7XG5cbiAgICBsZXQgX2hhbmRsZXIgPSB0aGlzLl9oYW5kbGVyc1thY3Rpb25JZF07XG4gICAgbGV0IF9hc3luY0hhbmRsZXIgPSB0aGlzLl9hc3luY0hhbmRsZXJzW2FjdGlvbklkXVxuICAgICAgJiYgdGhpcy5fYXN5bmNIYW5kbGVyc1thY3Rpb25JZF1bX2FzeW5jXTtcblxuICAgIGlmIChfYXN5bmMpIHtcbiAgICAgIHN3aXRjaCAoX2FzeW5jKSB7XG4gICAgICAgIGNhc2UgJ2JlZ2luJzpcbiAgICAgICAgICBpZiAodHlwZW9mIF9hc3luY0hhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX3BlcmZvcm1IYW5kbGVyLmFwcGx5KHRoaXMsIFtfYXN5bmNIYW5kbGVyXS5jb25jYXQoYWN0aW9uQXJncykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ2ZhaWx1cmUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgX2FzeW5jSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fcGVyZm9ybUhhbmRsZXIoX2FzeW5jSGFuZGxlciwgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgIGlmICh0eXBlb2YgX2FzeW5jSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX2hhbmRsZXIgPSBfYXN5bmNIYW5kbGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfaGFuZGxlciAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgIHRoaXMuX3BlcmZvcm1IYW5kbGVyKF9oYW5kbGVyLCBib2R5KTtcbiAgfVxuXG4gIF9wZXJmb3JtSGFuZGxlcihfaGFuZGxlciwgLi4uYXJncykge1xuICAgIHRoaXMuX2lzSGFuZGxpbmdEaXNwYXRjaCA9IHRydWU7XG4gICAgdGhpcy5fcGVuZGluZ1N0YXRlID0gYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcbiAgICB0aGlzLl9lbWl0Q2hhbmdlQWZ0ZXJIYW5kbGluZ0Rpc3BhdGNoID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgX2hhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmICh0aGlzLl9lbWl0Q2hhbmdlQWZ0ZXJIYW5kbGluZ0Rpc3BhdGNoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLl9wZW5kaW5nU3RhdGU7XG4gICAgICAgIHRoaXMuZW1pdCgnY2hhbmdlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzSGFuZGxpbmdEaXNwYXRjaCA9IGZhbHNlO1xuICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICB0aGlzLl9lbWl0Q2hhbmdlQWZ0ZXJIYW5kbGluZ0Rpc3BhdGNoID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuc3VyZUFjdGlvbklkKGFjdGlvbk9yQWN0aW9uSWQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhY3Rpb25PckFjdGlvbklkID09PSAnZnVuY3Rpb24nXG4gICAgPyBhY3Rpb25PckFjdGlvbklkLl9pZFxuICAgIDogYWN0aW9uT3JBY3Rpb25JZDtcbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  if (!this._events || !this._events[event]) return [];
	  if (this._events[event].fn) return [this._events[event].fn];

	  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
	    ee[i] = this._events[event][i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  if (!this._events || !this._events[event]) return false;

	  var listeners = this._events[event]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this);

	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true);

	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
	  if (!this._events || !this._events[event]) return this;

	  var listeners = this._events[event]
	    , events = [];

	  if (fn) {
	    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
	      events.push(listeners);
	    }
	    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
	      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
	        events.push(listeners[i]);
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[event] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[event];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[event];
	  else this._events = {};

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the module.
	//
	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.EventEmitter2 = EventEmitter;
	EventEmitter.EventEmitter3 = EventEmitter;

	//
	// Expose the module.
	//
	module.exports = EventEmitter;


/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	/**
	 * Actions
	 *
	 * Instances of the Actions class represent a set of actions. (In Flux parlance,
	 * these might be more accurately denoted as Action Creators, while Action
	 * refers to the payload sent to the dispatcher, but this is... confusing. We
	 * will use Action to mean the function you call to trigger a dispatch.)
	 *
	 * Create actions by extending from the base Actions class and adding methods.
	 * All methods on the prototype (except the constructor) will be
	 * converted into actions. The return value of an action is used as the body
	 * of the payload sent to the dispatcher.
	 */

	var uniqueId = _interopRequire(__webpack_require__(80));

	var Actions = (function () {
	  function Actions() {
	    _classCallCheck(this, Actions);

	    this._baseId = uniqueId();

	    var methodNames = this._getActionMethodNames();
	    for (var i = 0; i < methodNames.length; i++) {
	      var methodName = methodNames[i];
	      this._wrapAction(methodName);
	    }

	    this.getConstants = this.getActionIds;
	  }

	  _prototypeProperties(Actions, null, {
	    getActionIds: {
	      value: function getActionIds() {
	        var _this = this;
	        return this._getActionMethodNames().reduce(function (result, actionName) {
	          result[actionName] = _this[actionName]._id;
	          return result;
	        }, {});
	      },
	      writable: true,
	      configurable: true
	    },
	    _getActionMethodNames: {
	      value: function _getActionMethodNames(instance) {
	        var _this = this;
	        return Object.getOwnPropertyNames(this.constructor.prototype).filter(function (name) {
	          return name !== "constructor" && typeof _this[name] === "function";
	        });
	      },
	      writable: true,
	      configurable: true
	    },
	    _wrapAction: {
	      value: function _wrapAction(methodName) {
	        var _this = this;
	        var originalMethod = this[methodName];
	        var actionId = this._createActionId(methodName);

	        var action = function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          var body = originalMethod.apply(_this, args);

	          if (isPromise(body)) {
	            var promise = body;
	            _this._dispatchAsync(actionId, promise, args, methodName)
	            // Catch errors and do nothing
	            // They can be handled by store or caller
	            ["catch"](function (error) {});

	            return promise;
	          } else {
	            return _this._dispatch(actionId, body, args, methodName);
	          }
	        };

	        action._id = actionId;

	        this[methodName] = action;
	      },
	      writable: true,
	      configurable: true
	    },
	    _createActionId: {

	      /**
	       * Create unique string constant for an action method, using
	       * @param {string} methodName - Name of the action method
	       */
	      value: function _createActionId(methodName) {
	        return "" + this._baseId + "-" + methodName;
	      },
	      writable: true,
	      configurable: true
	    },
	    _dispatch: {
	      value: function _dispatch(actionId, body, args, methodName) {
	        if (typeof this.dispatch === "function") {
	          if (typeof body !== "undefined") {
	            this.dispatch(actionId, body, args);
	          }
	        } else {
	          if (process.env.NODE_ENV !== "production") {
	            console.warn("You've attempted to perform the action " + ("" + this.constructor.name + "#" + methodName + ", but it hasn't been added ") + "to a Flux instance.");
	          }
	        }

	        return body;
	      },
	      writable: true,
	      configurable: true
	    },
	    _dispatchAsync: {
	      value: function _dispatchAsync(actionId, promise, args, methodName) {
	        if (typeof this.dispatchAsync === "function") {
	          return this.dispatchAsync(actionId, promise, args);
	        } else {
	          if (process.env.NODE_ENV !== "production") {
	            console.warn("You've attempted to perform the asynchronous action " + ("" + this.constructor.name + "#" + methodName + ", but it hasn't been added ") + "to a Flux instance.");
	          }

	          return promise;
	        }
	      },
	      writable: true,
	      configurable: true
	    }
	  });

	  return Actions;
	})();

	module.exports = Actions;


	function isPromise(value) {
	  return value && typeof value.then === "function";
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BY3Rpb25zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFjTyxRQUFRLDJCQUFNLFVBQVU7O0lBRVYsT0FBTztBQUVmLFdBRlEsT0FBTzswQkFBUCxPQUFPOztBQUl4QixRQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsRUFBRSxDQUFDOztBQUUxQixRQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUMvQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMzQyxVQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsVUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM5Qjs7QUFFRCxRQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7R0FDdkM7O3VCQWJrQixPQUFPO0FBZTFCLGdCQUFZO2FBQUEsd0JBQUc7O0FBQ2IsZUFBTyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFLO0FBQ2pFLGdCQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBSyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDMUMsaUJBQU8sTUFBTSxDQUFDO1NBQ2YsRUFBRSxFQUFFLENBQUMsQ0FBQztPQUNSOzs7O0FBRUQseUJBQXFCO2FBQUEsK0JBQUMsUUFBUSxFQUFFOztBQUM5QixlQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUMxRCxNQUFNLENBQUMsVUFBQSxJQUFJO2lCQUNWLElBQUksS0FBSyxhQUFhLElBQ3RCLE9BQU8sTUFBSyxJQUFJLENBQUMsS0FBSyxVQUFVO1NBQUEsQ0FDakMsQ0FBQztPQUNMOzs7O0FBRUQsZUFBVzthQUFBLHFCQUFDLFVBQVUsRUFBRTs7QUFDdEIsWUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLFlBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRWhELFlBQUksTUFBTSxHQUFHLFlBQWE7NENBQVQsSUFBSTtBQUFKLGdCQUFJOzs7QUFDbkIsY0FBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLEtBQUssUUFBTyxJQUFJLENBQUMsQ0FBQzs7QUFFNUMsY0FBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbkIsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUNuQixrQkFBSyxjQUFjLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDOzs7cUJBR2hELENBQUMsVUFBQSxLQUFLLEVBQUksRUFBRSxDQUFDLENBQUM7O0FBRXRCLG1CQUFPLE9BQU8sQ0FBQztXQUNoQixNQUFNO0FBQ0wsbUJBQU8sTUFBSyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7V0FDekQ7U0FDRixDQUFDOztBQUVGLGNBQU0sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDOztBQUV0QixZQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDO09BQzNCOzs7O0FBTUQsbUJBQWU7Ozs7OzthQUFBLHlCQUFDLFVBQVUsRUFBRTtBQUMxQixvQkFBVSxJQUFJLENBQUMsT0FBTyxTQUFJLFVBQVUsQ0FBRztPQUN4Qzs7OztBQUVELGFBQVM7YUFBQSxtQkFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDMUMsWUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO0FBQ3ZDLGNBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFO0FBQy9CLGdCQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDckM7U0FDRixNQUFNO0FBQ0wsY0FBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEVBQUU7QUFDekMsbUJBQU8sQ0FBQyxJQUFJLENBQ1Ysa0RBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQUksVUFBVSxpQ0FBNkIsd0JBQzlDLENBQ3RCLENBQUM7V0FDSDtTQUNGOztBQUVELGVBQU8sSUFBSSxDQUFDO09BQ2I7Ozs7QUFFRCxrQkFBYzthQUFBLHdCQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUNsRCxZQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7QUFDNUMsaUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BELE1BQU07QUFDTCxjQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVksRUFBRTtBQUN6QyxtQkFBTyxDQUFDLElBQUksQ0FDViwrREFDRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksU0FBSSxVQUFVLGlDQUE2Qix3QkFDOUMsQ0FDdEIsQ0FBQztXQUNIOztBQUVELGlCQUFPLE9BQU8sQ0FBQztTQUNoQjtPQUVGOzs7Ozs7U0FoR2tCLE9BQU87OztpQkFBUCxPQUFPOzs7QUFvRzVCLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN4QixTQUFPLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDO0NBQ2xEIiwiZmlsZSI6InNyYy9BY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBY3Rpb25zXG4gKlxuICogSW5zdGFuY2VzIG9mIHRoZSBBY3Rpb25zIGNsYXNzIHJlcHJlc2VudCBhIHNldCBvZiBhY3Rpb25zLiAoSW4gRmx1eCBwYXJsYW5jZSxcbiAqIHRoZXNlIG1pZ2h0IGJlIG1vcmUgYWNjdXJhdGVseSBkZW5vdGVkIGFzIEFjdGlvbiBDcmVhdG9ycywgd2hpbGUgQWN0aW9uXG4gKiByZWZlcnMgdG8gdGhlIHBheWxvYWQgc2VudCB0byB0aGUgZGlzcGF0Y2hlciwgYnV0IHRoaXMgaXMuLi4gY29uZnVzaW5nLiBXZVxuICogd2lsbCB1c2UgQWN0aW9uIHRvIG1lYW4gdGhlIGZ1bmN0aW9uIHlvdSBjYWxsIHRvIHRyaWdnZXIgYSBkaXNwYXRjaC4pXG4gKlxuICogQ3JlYXRlIGFjdGlvbnMgYnkgZXh0ZW5kaW5nIGZyb20gdGhlIGJhc2UgQWN0aW9ucyBjbGFzcyBhbmQgYWRkaW5nIG1ldGhvZHMuXG4gKiBBbGwgbWV0aG9kcyBvbiB0aGUgcHJvdG90eXBlIChleGNlcHQgdGhlIGNvbnN0cnVjdG9yKSB3aWxsIGJlXG4gKiBjb252ZXJ0ZWQgaW50byBhY3Rpb25zLiBUaGUgcmV0dXJuIHZhbHVlIG9mIGFuIGFjdGlvbiBpcyB1c2VkIGFzIHRoZSBib2R5XG4gKiBvZiB0aGUgcGF5bG9hZCBzZW50IHRvIHRoZSBkaXNwYXRjaGVyLlxuICovXG5cbmltcG9ydCB1bmlxdWVJZCBmcm9tICd1bmlxdWVpZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbnMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fYmFzZUlkID0gdW5pcXVlSWQoKTtcblxuICAgIGxldCBtZXRob2ROYW1lcyA9IHRoaXMuX2dldEFjdGlvbk1ldGhvZE5hbWVzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRob2ROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG1ldGhvZE5hbWUgPSBtZXRob2ROYW1lc1tpXTtcbiAgICAgIHRoaXMuX3dyYXBBY3Rpb24obWV0aG9kTmFtZSk7XG4gICAgfVxuXG4gICAgdGhpcy5nZXRDb25zdGFudHMgPSB0aGlzLmdldEFjdGlvbklkcztcbiAgfVxuXG4gIGdldEFjdGlvbklkcygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0QWN0aW9uTWV0aG9kTmFtZXMoKS5yZWR1Y2UoKHJlc3VsdCwgYWN0aW9uTmFtZSkgPT4ge1xuICAgICAgcmVzdWx0W2FjdGlvbk5hbWVdID0gdGhpc1thY3Rpb25OYW1lXS5faWQ7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIF9nZXRBY3Rpb25NZXRob2ROYW1lcyhpbnN0YW5jZSkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZSlcbiAgICAgIC5maWx0ZXIobmFtZSA9PlxuICAgICAgICBuYW1lICE9PSAnY29uc3RydWN0b3InICYmXG4gICAgICAgIHR5cGVvZiB0aGlzW25hbWVdID09PSAnZnVuY3Rpb24nXG4gICAgICApO1xuICB9XG5cbiAgX3dyYXBBY3Rpb24obWV0aG9kTmFtZSkge1xuICAgIGxldCBvcmlnaW5hbE1ldGhvZCA9IHRoaXNbbWV0aG9kTmFtZV07XG4gICAgbGV0IGFjdGlvbklkID0gdGhpcy5fY3JlYXRlQWN0aW9uSWQobWV0aG9kTmFtZSk7XG5cbiAgICBsZXQgYWN0aW9uID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGxldCBib2R5ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgIGlmIChpc1Byb21pc2UoYm9keSkpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBib2R5O1xuICAgICAgICB0aGlzLl9kaXNwYXRjaEFzeW5jKGFjdGlvbklkLCBwcm9taXNlLCBhcmdzLCBtZXRob2ROYW1lKVxuICAgICAgICAgIC8vIENhdGNoIGVycm9ycyBhbmQgZG8gbm90aGluZ1xuICAgICAgICAgIC8vIFRoZXkgY2FuIGJlIGhhbmRsZWQgYnkgc3RvcmUgb3IgY2FsbGVyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHt9KTtcblxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaChhY3Rpb25JZCwgYm9keSwgYXJncywgbWV0aG9kTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGFjdGlvbi5faWQgPSBhY3Rpb25JZDtcblxuICAgIHRoaXNbbWV0aG9kTmFtZV0gPSBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHVuaXF1ZSBzdHJpbmcgY29uc3RhbnQgZm9yIGFuIGFjdGlvbiBtZXRob2QsIHVzaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIC0gTmFtZSBvZiB0aGUgYWN0aW9uIG1ldGhvZFxuICAgKi9cbiAgX2NyZWF0ZUFjdGlvbklkKG1ldGhvZE5hbWUpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fYmFzZUlkfS0ke21ldGhvZE5hbWV9YDtcbiAgfVxuXG4gIF9kaXNwYXRjaChhY3Rpb25JZCwgYm9keSwgYXJncywgbWV0aG9kTmFtZSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5kaXNwYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBib2R5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKGFjdGlvbklkLCBib2R5LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBZb3UndmUgYXR0ZW1wdGVkIHRvIHBlcmZvcm0gdGhlIGFjdGlvbiBgXG4gICAgICAgICsgYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSMke21ldGhvZE5hbWV9LCBidXQgaXQgaGFzbid0IGJlZW4gYWRkZWQgYFxuICAgICAgICArIGB0byBhIEZsdXggaW5zdGFuY2UuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgX2Rpc3BhdGNoQXN5bmMoYWN0aW9uSWQsIHByb21pc2UsIGFyZ3MsIG1ldGhvZE5hbWUpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZGlzcGF0Y2hBc3luYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2hBc3luYyhhY3Rpb25JZCwgcHJvbWlzZSwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgWW91J3ZlIGF0dGVtcHRlZCB0byBwZXJmb3JtIHRoZSBhc3luY2hyb25vdXMgYWN0aW9uIGBcbiAgICAgICAgKyBgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IyR7bWV0aG9kTmFtZX0sIGJ1dCBpdCBoYXNuJ3QgYmVlbiBhZGRlZCBgXG4gICAgICAgICsgYHRvIGEgRmx1eCBpbnN0YW5jZS5gXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICB9XG5cbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';


	var count = 0;

	/**
	 * Generate a unique ID.
	 *
	 * Optionally pass a prefix to prepend, a suffix to append, or a
	 * multiplier to use on the ID.
	 *
	 * ```js
	 * uniqueId(); //=> '25'
	 *
	 * uniqueId({prefix: 'apple_'});
	 * //=> 'apple_10'
	 *
	 * uniqueId({suffix: '_orange'});
	 * //=> '10_orange'
	 *
	 * uniqueId({multiplier: 5});
	 * //=> 5, 10, 15, 20...
	 * ```
	 *
	 * To reset the `id` to zero, do `id.reset()`.
	 *
	 * @param  {Object} `options` Optionally pass a `prefix`, `suffix` and/or `multiplier.
	 * @return {String} The unique id.
	 * @api public
	 */

	var id = module.exports = function (options) {
	  options = options || {};

	  var prefix = options.prefix;
	  var suffix = options.suffix;

	  var id = ++count * (options.multiplier || 1);

	  if (prefix == null) {
	    prefix = '';
	  }

	  if (suffix == null) {
	    suffix = '';
	  }

	  return String(prefix) + id + String(suffix);
	};


	id.reset = function() {
	  return count = 0;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(82)


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */

	"use strict";

	var invariant = __webpack_require__(83);

	var _lastID = 1;
	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	  function Dispatcher() {
	    this.$Dispatcher_callbacks = {};
	    this.$Dispatcher_isPending = {};
	    this.$Dispatcher_isHandled = {};
	    this.$Dispatcher_isDispatching = false;
	    this.$Dispatcher_pendingPayload = null;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   *
	   * @param {function} callback
	   * @return {string}
	   */
	  Dispatcher.prototype.register=function(callback) {
	    var id = _prefix + _lastID++;
	    this.$Dispatcher_callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   *
	   * @param {string} id
	   */
	  Dispatcher.prototype.unregister=function(id) {
	    invariant(
	      this.$Dispatcher_callbacks[id],
	      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
	      id
	    );
	    delete this.$Dispatcher_callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   *
	   * @param {array<string>} ids
	   */
	  Dispatcher.prototype.waitFor=function(ids) {
	    invariant(
	      this.$Dispatcher_isDispatching,
	      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
	    );
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this.$Dispatcher_isPending[id]) {
	        invariant(
	          this.$Dispatcher_isHandled[id],
	          'Dispatcher.waitFor(...): Circular dependency detected while ' +
	          'waiting for `%s`.',
	          id
	        );
	        continue;
	      }
	      invariant(
	        this.$Dispatcher_callbacks[id],
	        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
	        id
	      );
	      this.$Dispatcher_invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   *
	   * @param {object} payload
	   */
	  Dispatcher.prototype.dispatch=function(payload) {
	    invariant(
	      !this.$Dispatcher_isDispatching,
	      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
	    );
	    this.$Dispatcher_startDispatching(payload);
	    try {
	      for (var id in this.$Dispatcher_callbacks) {
	        if (this.$Dispatcher_isPending[id]) {
	          continue;
	        }
	        this.$Dispatcher_invokeCallback(id);
	      }
	    } finally {
	      this.$Dispatcher_stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   *
	   * @return {boolean}
	   */
	  Dispatcher.prototype.isDispatching=function() {
	    return this.$Dispatcher_isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @param {string} id
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
	    this.$Dispatcher_isPending[id] = true;
	    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	    this.$Dispatcher_isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @param {object} payload
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
	    for (var id in this.$Dispatcher_callbacks) {
	      this.$Dispatcher_isPending[id] = false;
	      this.$Dispatcher_isHandled[id] = false;
	    }
	    this.$Dispatcher_pendingPayload = payload;
	    this.$Dispatcher_isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
	    this.$Dispatcher_pendingPayload = null;
	    this.$Dispatcher_isDispatching = false;
	  };


	module.exports = Dispatcher;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	exports.__esModule = true;

	var _Actions2 = __webpack_require__(75);

	var _matchesType = __webpack_require__(85);

	var _matchesType2 = _interopRequireWildcard(_matchesType);

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireWildcard(_invariant);

	var _isArray = __webpack_require__(86);

	var _isArray2 = _interopRequireWildcard(_isArray);

	var _isObject = __webpack_require__(90);

	var _isObject2 = _interopRequireWildcard(_isObject);

	var DragDropActions = (function (_Actions) {
	  function DragDropActions(manager) {
	    _classCallCheck(this, DragDropActions);

	    _Actions.call(this);
	    this.manager = manager;
	  }

	  _inherits(DragDropActions, _Actions);

	  DragDropActions.prototype.beginDrag = function beginDrag(sourceIds) {
	    var _ref = arguments[1] === undefined ? {} : arguments[1];

	    var _ref$publishSource = _ref.publishSource;
	    var publishSource = _ref$publishSource === undefined ? true : _ref$publishSource;
	    var _ref$clientOffset = _ref.clientOffset;
	    var clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;
	    var getSourceClientOffset = _ref.getSourceClientOffset;

	    _invariant2['default'](_isArray2['default'](sourceIds), 'Expected sourceIds to be an array.');

	    var monitor = this.manager.getMonitor();
	    var registry = this.manager.getRegistry();
	    _invariant2['default'](!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

	    for (var i = 0; i < sourceIds.length; i++) {
	      _invariant2['default'](registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
	    }

	    var sourceId = null;
	    for (var i = sourceIds.length - 1; i >= 0; i--) {
	      if (monitor.canDragSource(sourceIds[i])) {
	        sourceId = sourceIds[i];
	        break;
	      }
	    }
	    if (sourceId === null) {
	      return;
	    }

	    var sourceClientOffset = null;
	    if (clientOffset) {
	      _invariant2['default'](typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
	      sourceClientOffset = getSourceClientOffset(sourceId);
	    }

	    var source = registry.getSource(sourceId);
	    var item = source.beginDrag(monitor, sourceId);
	    _invariant2['default'](_isObject2['default'](item), 'Item must be an object.');

	    registry.pinSource(sourceId);

	    var itemType = registry.getSourceType(sourceId);
	    return {
	      itemType: itemType,
	      item: item,
	      sourceId: sourceId,
	      clientOffset: clientOffset,
	      sourceClientOffset: sourceClientOffset,
	      isSourcePublic: publishSource
	    };
	  };

	  DragDropActions.prototype.publishDragSource = function publishDragSource() {
	    var monitor = this.manager.getMonitor();
	    if (!monitor.isDragging()) {
	      return;
	    }

	    return {};
	  };

	  DragDropActions.prototype.hover = function hover(targetIds) {
	    var _ref2 = arguments[1] === undefined ? {} : arguments[1];

	    var _ref2$clientOffset = _ref2.clientOffset;
	    var clientOffset = _ref2$clientOffset === undefined ? null : _ref2$clientOffset;

	    _invariant2['default'](_isArray2['default'](targetIds), 'Expected targetIds to be an array.');
	    targetIds = targetIds.slice(0);

	    var monitor = this.manager.getMonitor();
	    var registry = this.manager.getRegistry();
	    _invariant2['default'](monitor.isDragging(), 'Cannot call hover while not dragging.');
	    _invariant2['default'](!monitor.didDrop(), 'Cannot call hover after drop.');

	    var draggedItemType = monitor.getItemType();
	    for (var i = 0; i < targetIds.length; i++) {
	      var targetId = targetIds[i];
	      _invariant2['default'](targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

	      var target = registry.getTarget(targetId);
	      _invariant2['default'](target, 'Expected targetIds to be registered.');

	      var targetType = registry.getTargetType(targetId);
	      if (_matchesType2['default'](targetType, draggedItemType)) {
	        target.hover(monitor, targetId);
	      }
	    }

	    return { targetIds: targetIds, clientOffset: clientOffset };
	  };

	  DragDropActions.prototype.drop = function drop() {
	    var _this = this;

	    var monitor = this.manager.getMonitor();
	    var registry = this.manager.getRegistry();
	    _invariant2['default'](monitor.isDragging(), 'Cannot call drop while not dragging.');
	    _invariant2['default'](!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

	    var _getActionIds = this.getActionIds();

	    var dropActionId = _getActionIds.drop;

	    var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

	    targetIds.reverse();
	    targetIds.forEach(function (targetId, index) {
	      var target = registry.getTarget(targetId);

	      var dropResult = target.drop(monitor, targetId);
	      _invariant2['default'](typeof dropResult === 'undefined' || _isObject2['default'](dropResult), 'Drop result must either be an object or undefined.');
	      if (typeof dropResult === 'undefined') {
	        dropResult = index === 0 ? {} : monitor.getDropResult();
	      }

	      _this.dispatch(dropActionId, { dropResult: dropResult });
	    });
	  };

	  DragDropActions.prototype.endDrag = function endDrag() {
	    var monitor = this.manager.getMonitor();
	    var registry = this.manager.getRegistry();
	    _invariant2['default'](monitor.isDragging(), 'Cannot call endDrag while not dragging.');

	    var sourceId = monitor.getSourceId();
	    var source = registry.getSource(sourceId, true);
	    source.endDrag(monitor, sourceId);

	    registry.unpinSource();

	    return {};
	  };

	  return DragDropActions;
	})(_Actions2.Actions);

	exports['default'] = DragDropActions;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;
	exports['default'] = matchesType;

	var _isArray = __webpack_require__(86);

	var _isArray2 = _interopRequireWildcard(_isArray);

	function matchesType(targetType, draggedItemType) {
	  if (_isArray2['default'](targetType)) {
	    return targetType.some(function (t) {
	      return t === draggedItemType;
	    });
	  } else {
	    return targetType === draggedItemType;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(87),
	    isLength = __webpack_require__(92),
	    isObjectLike = __webpack_require__(91);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(88);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(89),
	    isObjectLike = __webpack_require__(91);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isNative;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(90);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	exports.__esModule = true;

	var _Actions2 = __webpack_require__(75);

	var RegistryActions = (function (_Actions) {
	  function RegistryActions() {
	    _classCallCheck(this, RegistryActions);

	    if (_Actions != null) {
	      _Actions.apply(this, arguments);
	    }
	  }

	  _inherits(RegistryActions, _Actions);

	  RegistryActions.prototype.addSource = function addSource(sourceId) {
	    return { sourceId: sourceId };
	  };

	  RegistryActions.prototype.addTarget = function addTarget(targetId) {
	    return { targetId: targetId };
	  };

	  RegistryActions.prototype.removeSource = function removeSource(sourceId) {
	    return { sourceId: sourceId };
	  };

	  RegistryActions.prototype.removeTarget = function removeTarget(targetId) {
	    return { targetId: targetId };
	  };

	  return RegistryActions;
	})(_Actions2.Actions);

	exports['default'] = RegistryActions;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	exports.__esModule = true;

	var _Store2 = __webpack_require__(75);

	var _xor = __webpack_require__(95);

	var _xor2 = _interopRequireWildcard(_xor);

	var _without = __webpack_require__(108);

	var _without2 = _interopRequireWildcard(_without);

	var _intersection = __webpack_require__(110);

	var _intersection2 = _interopRequireWildcard(_intersection);

	var ALL_DIRTY_WILDCARD = { __all__: true };

	var DragOperationStore = (function (_Store) {
	  function DragOperationStore(flux) {
	    _classCallCheck(this, DragOperationStore);

	    _Store.call(this);

	    var dragDropActionIds = flux.dragDropActionIds;
	    var registryActionIds = flux.registryActionIds;

	    this.register(dragDropActionIds.beginDrag, this.handleBeginDrag);
	    this.register(dragDropActionIds.publishDragSource, this.handlePublishDragSource);
	    this.register(dragDropActionIds.hover, this.handleHover);
	    this.register(dragDropActionIds.endDrag, this.handleEndDrag);
	    this.register(dragDropActionIds.drop, this.handleDrop);
	    this.register(registryActionIds.removeTarget, this.handleRemoveTarget);

	    this.dirtyHandlerIds = [];
	    this.state = {
	      itemType: null,
	      item: null,
	      sourceId: null,
	      targetIds: [],
	      dropResult: null,
	      didDrop: false,
	      isSourcePublic: null
	    };
	  }

	  _inherits(DragOperationStore, _Store);

	  DragOperationStore.prototype.setState = function setState(nextState) {
	    var dirtyHandlerIds = arguments[1] === undefined ? ALL_DIRTY_WILDCARD : arguments[1];

	    this.dirtyHandlerIds = dirtyHandlerIds;
	    _Store.prototype.setState.call(this, nextState);
	  };

	  DragOperationStore.prototype.handleBeginDrag = function handleBeginDrag(_ref) {
	    var itemType = _ref.itemType;
	    var item = _ref.item;
	    var sourceId = _ref.sourceId;
	    var isSourcePublic = _ref.isSourcePublic;

	    this.setState({
	      itemType: itemType,
	      item: item,
	      sourceId: sourceId,
	      isSourcePublic: isSourcePublic,
	      dropResult: null,
	      didDrop: false
	    });
	  };

	  DragOperationStore.prototype.handlePublishDragSource = function handlePublishDragSource() {
	    this.setState({
	      isSourcePublic: true
	    });
	  };

	  DragOperationStore.prototype.handleHover = function handleHover(_ref2) {
	    var targetIds = _ref2.targetIds;
	    var prevTargetIds = this.state.targetIds;

	    var dirtyHandlerIds = _xor2['default'](targetIds, prevTargetIds);

	    var didChange = false;
	    if (dirtyHandlerIds.length === 0) {
	      for (var i = 0; i < targetIds.length; i++) {
	        if (targetIds[i] !== prevTargetIds[i]) {
	          didChange = true;
	          break;
	        }
	      }
	    } else {
	      didChange = true;
	    }

	    if (!didChange) {
	      return;
	    }

	    var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
	    var innermostTargetId = targetIds[targetIds.length - 1];

	    if (prevInnermostTargetId !== innermostTargetId) {
	      if (prevInnermostTargetId) {
	        dirtyHandlerIds.push(prevInnermostTargetId);
	      }
	      if (innermostTargetId) {
	        dirtyHandlerIds.push(innermostTargetId);
	      }
	    }

	    this.setState({
	      targetIds: targetIds
	    }, dirtyHandlerIds);
	  };

	  DragOperationStore.prototype.handleRemoveTarget = function handleRemoveTarget(_ref3) {
	    var targetId = _ref3.targetId;
	    var targetIds = this.state.targetIds;

	    if (targetIds.indexOf(targetId) === -1) {
	      return;
	    }

	    this.setState({
	      targetIds: _without2['default'](targetIds, targetId)
	    }, []);
	  };

	  DragOperationStore.prototype.handleDrop = function handleDrop(_ref4) {
	    var dropResult = _ref4.dropResult;

	    this.setState({
	      dropResult: dropResult,
	      didDrop: true,
	      targetIds: []
	    });
	  };

	  DragOperationStore.prototype.handleEndDrag = function handleEndDrag() {
	    this.setState({
	      itemType: null,
	      item: null,
	      sourceId: null,
	      dropResult: null,
	      didDrop: false,
	      isSourcePublic: null,
	      targetIds: []
	    });
	  };

	  DragOperationStore.prototype.isDragging = function isDragging() {
	    return Boolean(this.getItemType());
	  };

	  DragOperationStore.prototype.getItemType = function getItemType() {
	    return this.state.itemType;
	  };

	  DragOperationStore.prototype.getSourceId = function getSourceId() {
	    return this.state.sourceId;
	  };

	  DragOperationStore.prototype.getTargetIds = function getTargetIds() {
	    return this.state.targetIds.slice(0);
	  };

	  DragOperationStore.prototype.getItem = function getItem() {
	    return this.state.item;
	  };

	  DragOperationStore.prototype.getDropResult = function getDropResult() {
	    return this.state.dropResult;
	  };

	  DragOperationStore.prototype.didDrop = function didDrop() {
	    return this.state.didDrop;
	  };

	  DragOperationStore.prototype.isSourcePublic = function isSourcePublic() {
	    return this.state.isSourcePublic;
	  };

	  DragOperationStore.prototype.areDirty = function areDirty(handlerIds) {
	    if (this.dirtyHandlerIds === ALL_DIRTY_WILDCARD) {
	      return true;
	    }

	    return _intersection2['default'](handlerIds, this.dirtyHandlerIds).length > 0;
	  };

	  return DragOperationStore;
	})(_Store2.Store);

	exports['default'] = DragOperationStore;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(96),
	    baseDifference = __webpack_require__(97),
	    baseUniq = __webpack_require__(104),
	    isArrayLike = __webpack_require__(105);

	/**
	 * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the provided arrays.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of values.
	 * @example
	 *
	 * _.xor([1, 2], [4, 2]);
	 * // => [1, 4]
	 */
	function xor() {
	  var index = -1,
	      length = arguments.length;

	  while (++index < length) {
	    var array = arguments[index];
	    if (isArrayLike(array)) {
	      var result = result
	        ? arrayPush(baseDifference(result, array), baseDifference(array, result))
	        : array;
	    }
	  }
	  return result ? baseUniq(result) : [];
	}

	module.exports = xor;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(98),
	    cacheIndexOf = __webpack_require__(100),
	    createCache = __webpack_require__(101);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];

	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;

	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];

	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(99);

	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(90);

	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	  return result ? 0 : -1;
	}

	module.exports = cacheIndexOf;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(102),
	    getNative = __webpack_require__(87);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}

	module.exports = createCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(103),
	    getNative = __webpack_require__(87);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;

	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}

	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;

	module.exports = SetCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(90);

	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}

	module.exports = cachePush;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(98),
	    cacheIndexOf = __webpack_require__(100),
	    createCache = __webpack_require__(101);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniq` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The function invoked per iteration.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee) {
	  var index = -1,
	      indexOf = baseIndexOf,
	      length = array.length,
	      isCommon = true,
	      isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
	      seen = isLarge ? createCache() : null,
	      result = [];

	  if (seen) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	  } else {
	    isLarge = false;
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value, index, array) : value;

	    if (isCommon && value === value) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (indexOf(seen, computed, 0) < 0) {
	      if (iteratee || isLarge) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(106),
	    isLength = __webpack_require__(92);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(107);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(97),
	    isArrayLike = __webpack_require__(105),
	    restParam = __webpack_require__(109);

	/**
	 * Creates an array excluding all provided values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to filter.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.without([1, 2, 1, 3], 1, 2);
	 * // => [3]
	 */
	var without = restParam(function(array, values) {
	  return isArrayLike(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(98),
	    cacheIndexOf = __webpack_require__(100),
	    createCache = __webpack_require__(101),
	    isArrayLike = __webpack_require__(105),
	    restParam = __webpack_require__(109);

	/**
	 * Creates an array of unique values that are included in all of the provided
	 * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of shared values.
	 * @example
	 * _.intersection([1, 2], [4, 2], [2, 1]);
	 * // => [2]
	 */
	var intersection = restParam(function(arrays) {
	  var othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(length),
	      indexOf = baseIndexOf,
	      isCommon = true,
	      result = [];

	  while (othIndex--) {
	    var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	    caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	  }
	  var array = arrays[0],
	      index = -1,
	      length = array ? array.length : 0,
	      seen = caches[0];

	  outer:
	  while (++index < length) {
	    value = array[index];
	    if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	      var othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(value);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	});

	module.exports = intersection;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	exports.__esModule = true;

	var _Store2 = __webpack_require__(75);

	function areOffsetsEqual(offsetA, offsetB) {
	  if (offsetA === offsetB) {
	    return true;
	  }

	  return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}

	var DragOffsetStore = (function (_Store) {
	  function DragOffsetStore(flux) {
	    _classCallCheck(this, DragOffsetStore);

	    _Store.call(this);

	    var dragDropActionIds = flux.dragDropActionIds;

	    this.register(dragDropActionIds.beginDrag, this.handleBeginDrag);
	    this.register(dragDropActionIds.hover, this.handleHover);
	    this.register(dragDropActionIds.endDrag, this.handleEndDrag);
	    this.register(dragDropActionIds.drop, this.handleDrop);

	    this.state = {
	      initialSourceClientOffset: null,
	      initialClientOffset: null,
	      clientOffset: null
	    };
	  }

	  _inherits(DragOffsetStore, _Store);

	  DragOffsetStore.prototype.handleBeginDrag = function handleBeginDrag(_ref) {
	    var clientOffset = _ref.clientOffset;
	    var sourceClientOffset = _ref.sourceClientOffset;

	    this.setState({
	      initialClientOffset: clientOffset,
	      initialSourceClientOffset: sourceClientOffset,
	      clientOffset: clientOffset
	    });
	  };

	  DragOffsetStore.prototype.handleHover = function handleHover(_ref2) {
	    var clientOffset = _ref2.clientOffset;
	    var prevClientOffset = this.state.clientOffset;

	    if (!areOffsetsEqual(clientOffset, prevClientOffset)) {
	      this.setState({
	        clientOffset: clientOffset
	      });
	    }
	  };

	  DragOffsetStore.prototype.handleEndDrag = function handleEndDrag() {
	    this.setState({
	      initialClientOffset: null,
	      initialSourceClientOffset: null,
	      clientOffset: null
	    });
	  };

	  DragOffsetStore.prototype.handleDrop = function handleDrop() {
	    this.setState({
	      initialClientOffset: null,
	      initialSourceClientOffset: null,
	      clientOffset: null
	    });
	  };

	  DragOffsetStore.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.state.initialClientOffset;
	  };

	  DragOffsetStore.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.state.initialSourceClientOffset;
	  };

	  DragOffsetStore.prototype.getClientOffset = function getClientOffset() {
	    return this.state.clientOffset;
	  };

	  DragOffsetStore.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    var _state = this.state;
	    var clientOffset = _state.clientOffset;
	    var initialClientOffset = _state.initialClientOffset;
	    var initialSourceClientOffset = _state.initialSourceClientOffset;

	    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
	      return null;
	    }

	    return {
	      x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
	      y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
	    };
	  };

	  DragOffsetStore.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    var _state2 = this.state;
	    var clientOffset = _state2.clientOffset;
	    var initialClientOffset = _state2.initialClientOffset;

	    if (!clientOffset || !initialClientOffset) {
	      return null;
	    }

	    return {
	      x: clientOffset.x - initialClientOffset.x,
	      y: clientOffset.y - initialClientOffset.y
	    };
	  };

	  return DragOffsetStore;
	})(_Store2.Store);

	exports['default'] = DragOffsetStore;
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	exports.__esModule = true;

	var _Store2 = __webpack_require__(75);

	var RefCountStore = (function (_Store) {
	  function RefCountStore(flux) {
	    _classCallCheck(this, RefCountStore);

	    _Store.call(this);

	    var registryActionIds = flux.registryActionIds;

	    this.register(registryActionIds.addSource, this.addRef);
	    this.register(registryActionIds.addTarget, this.addRef);
	    this.register(registryActionIds.removeSource, this.removeRef);
	    this.register(registryActionIds.removeTarget, this.removeRef);

	    this.state = {
	      refCount: 0
	    };
	  }

	  _inherits(RefCountStore, _Store);

	  RefCountStore.prototype.addRef = function addRef() {
	    this.setState({
	      refCount: this.state.refCount + 1
	    });
	  };

	  RefCountStore.prototype.removeRef = function removeRef() {
	    this.setState({
	      refCount: this.state.refCount - 1
	    });
	  };

	  RefCountStore.prototype.hasRefs = function hasRefs() {
	    return this.state.refCount > 0;
	  };

	  return RefCountStore;
	})(_Store2.Store);

	exports['default'] = RefCountStore;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireWildcard(_invariant);

	var _matchesType = __webpack_require__(85);

	var _matchesType2 = _interopRequireWildcard(_matchesType);

	var _isArray = __webpack_require__(86);

	var _isArray2 = _interopRequireWildcard(_isArray);

	var DragDropMonitor = (function () {
	  function DragDropMonitor(flux, registry) {
	    _classCallCheck(this, DragDropMonitor);

	    this.dragOperationStore = flux.dragOperationStore;
	    this.dragOffsetStore = flux.dragOffsetStore;
	    this.registry = registry;
	  }

	  DragDropMonitor.prototype.subscribeToStateChange = function subscribeToStateChange(listener) {
	    var _ref = arguments[1] === undefined ? {} : arguments[1];

	    var _ref$handlerIds = _ref.handlerIds;
	    var handlerIds = _ref$handlerIds === undefined ? null : _ref$handlerIds;

	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');

	    var dragOperationStore = this.dragOperationStore;

	    var handleChange = listener;
	    if (handlerIds) {
	      _invariant2['default'](_isArray2['default'](handlerIds), 'handlerIds, when specified, must be an array of strings.');
	      handleChange = function () {
	        if (dragOperationStore.areDirty(handlerIds)) {
	          listener();
	        }
	      };
	    }

	    dragOperationStore.addListener('change', handleChange);

	    return function dispose() {
	      dragOperationStore.removeListener('change', handleChange);
	    };
	  };

	  DragDropMonitor.prototype.subscribeToOffsetChange = function subscribeToOffsetChange(listener) {
	    _invariant2['default'](typeof listener === 'function', 'listener must be a function.');

	    var dragOffsetStore = this.dragOffsetStore;

	    dragOffsetStore.addListener('change', listener);

	    return function dispose() {
	      dragOffsetStore.removeListener('change', listener);
	    };
	  };

	  DragDropMonitor.prototype.canDragSource = function canDragSource(sourceId) {
	    var source = this.registry.getSource(sourceId);
	    _invariant2['default'](source, 'Expected to find a valid source.');

	    if (this.isDragging()) {
	      return false;
	    }

	    return source.canDrag(this, sourceId);
	  };

	  DragDropMonitor.prototype.canDropOnTarget = function canDropOnTarget(targetId) {
	    var target = this.registry.getTarget(targetId);
	    _invariant2['default'](target, 'Expected to find a valid target.');

	    if (!this.isDragging() || this.didDrop()) {
	      return false;
	    }

	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    return _matchesType2['default'](targetType, draggedItemType) && target.canDrop(this, targetId);
	  };

	  DragDropMonitor.prototype.isDragging = function isDragging() {
	    return this.dragOperationStore.isDragging();
	  };

	  DragDropMonitor.prototype.isDraggingSource = function isDraggingSource(sourceId) {
	    var source = this.registry.getSource(sourceId, true);
	    _invariant2['default'](source, 'Expected to find a valid source.');

	    if (!this.isDragging() || !this.isSourcePublic()) {
	      return false;
	    }

	    var sourceType = this.registry.getSourceType(sourceId);
	    var draggedItemType = this.getItemType();
	    if (sourceType !== draggedItemType) {
	      return false;
	    }

	    return source.isDragging(this, sourceId);
	  };

	  DragDropMonitor.prototype.isOverTarget = function isOverTarget(targetId) {
	    var _ref2 = arguments[1] === undefined ? {} : arguments[1];

	    var _ref2$shallow = _ref2.shallow;
	    var shallow = _ref2$shallow === undefined ? false : _ref2$shallow;

	    if (!this.isDragging()) {
	      return false;
	    }

	    var targetType = this.registry.getTargetType(targetId);
	    var draggedItemType = this.getItemType();
	    if (!_matchesType2['default'](targetType, draggedItemType)) {
	      return false;
	    }

	    var targetIds = this.getTargetIds();
	    if (!targetIds.length) {
	      return false;
	    }

	    var index = targetIds.indexOf(targetId);
	    if (shallow) {
	      return index === targetIds.length - 1;
	    } else {
	      return index > -1;
	    }
	  };

	  DragDropMonitor.prototype.getItemType = function getItemType() {
	    return this.dragOperationStore.getItemType();
	  };

	  DragDropMonitor.prototype.getItem = function getItem() {
	    return this.dragOperationStore.getItem();
	  };

	  DragDropMonitor.prototype.getSourceId = function getSourceId() {
	    return this.dragOperationStore.getSourceId();
	  };

	  DragDropMonitor.prototype.getTargetIds = function getTargetIds() {
	    return this.dragOperationStore.getTargetIds();
	  };

	  DragDropMonitor.prototype.getDropResult = function getDropResult() {
	    return this.dragOperationStore.getDropResult();
	  };

	  DragDropMonitor.prototype.didDrop = function didDrop() {
	    return this.dragOperationStore.didDrop();
	  };

	  DragDropMonitor.prototype.isSourcePublic = function isSourcePublic() {
	    return this.dragOperationStore.isSourcePublic();
	  };

	  DragDropMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.dragOffsetStore.getInitialClientOffset();
	  };

	  DragDropMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.dragOffsetStore.getInitialSourceClientOffset();
	  };

	  DragDropMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.dragOffsetStore.getSourceClientOffset();
	  };

	  DragDropMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.dragOffsetStore.getClientOffset();
	  };

	  DragDropMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.dragOffsetStore.getDifferenceFromInitialOffset();
	  };

	  return DragDropMonitor;
	})();

	exports['default'] = DragDropMonitor;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireWildcard(_invariant);

	var _keyMirror = __webpack_require__(115);

	var _keyMirror2 = _interopRequireWildcard(_keyMirror);

	var _isArray = __webpack_require__(86);

	var _isArray2 = _interopRequireWildcard(_isArray);

	var _getNextUniqueId = __webpack_require__(116);

	var _getNextUniqueId2 = _interopRequireWildcard(_getNextUniqueId);

	var HandlerRoles = _keyMirror2['default']({
	  SOURCE: null,
	  TARGET: null
	});

	function validateSourceContract(source) {
	  _invariant2['default'](typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
	  _invariant2['default'](typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
	  _invariant2['default'](typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}

	function validateTargetContract(target) {
	  _invariant2['default'](typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
	  _invariant2['default'](typeof target.hover === 'function', 'Expected hover to be a function.');
	  _invariant2['default'](typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}

	function validateType(type, allowArray) {
	  if (allowArray && _isArray2['default'](type)) {
	    type.forEach(function (t) {
	      return validateType(t, false);
	    });
	    return;
	  }

	  _invariant2['default'](typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}

	function getNextHandlerId(role) {
	  var id = _getNextUniqueId2['default']().toString();
	  switch (role) {
	    case HandlerRoles.SOURCE:
	      return 'S' + id;
	    case HandlerRoles.TARGET:
	      return 'T' + id;
	    default:
	      _invariant2['default'](false, 'Unknown role: ' + role);
	  }
	}

	function parseRoleFromHandlerId(handlerId) {
	  switch (handlerId[0]) {
	    case 'S':
	      return HandlerRoles.SOURCE;
	    case 'T':
	      return HandlerRoles.TARGET;
	    default:
	      _invariant2['default'](false, 'Cannot parse handler ID: ' + handlerId);
	  }
	}

	var HandlerRegistry = (function () {
	  function HandlerRegistry(actions) {
	    _classCallCheck(this, HandlerRegistry);

	    this.actions = actions;

	    this.types = {};
	    this.handlers = {};

	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  }

	  HandlerRegistry.prototype.addSource = function addSource(type, source) {
	    validateType(type);
	    validateSourceContract(source);

	    var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
	    this.actions.addSource(sourceId);
	    return sourceId;
	  };

	  HandlerRegistry.prototype.addTarget = function addTarget(type, target) {
	    validateType(type, true);
	    validateTargetContract(target);

	    var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
	    this.actions.addTarget(targetId);
	    return targetId;
	  };

	  HandlerRegistry.prototype.addHandler = function addHandler(role, type, handler) {
	    var id = getNextHandlerId(role);
	    this.types[id] = type;
	    this.handlers[id] = handler;

	    return id;
	  };

	  HandlerRegistry.prototype.containsHandler = function containsHandler(handler) {
	    var _this = this;

	    return Object.keys(this.handlers).some(function (key) {
	      return _this.handlers[key] === handler;
	    });
	  };

	  HandlerRegistry.prototype.getSource = function getSource(sourceId, includePinned) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');

	    var isPinned = includePinned && sourceId === this.pinnedSourceId;
	    var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

	    return source;
	  };

	  HandlerRegistry.prototype.getTarget = function getTarget(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.handlers[targetId];
	  };

	  HandlerRegistry.prototype.getSourceType = function getSourceType(sourceId) {
	    _invariant2['default'](this.isSourceId(sourceId), 'Expected a valid source ID.');
	    return this.types[sourceId];
	  };

	  HandlerRegistry.prototype.getTargetType = function getTargetType(targetId) {
	    _invariant2['default'](this.isTargetId(targetId), 'Expected a valid target ID.');
	    return this.types[targetId];
	  };

	  HandlerRegistry.prototype.isSourceId = function isSourceId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.SOURCE;
	  };

	  HandlerRegistry.prototype.isTargetId = function isTargetId(handlerId) {
	    var role = parseRoleFromHandlerId(handlerId);
	    return role === HandlerRoles.TARGET;
	  };

	  HandlerRegistry.prototype.removeSource = function removeSource(sourceId) {
	    _invariant2['default'](this.getSource(sourceId), 'Expected an existing source.');

	    delete this.handlers[sourceId];
	    delete this.types[sourceId];

	    this.actions.removeSource(sourceId);
	  };

	  HandlerRegistry.prototype.removeTarget = function removeTarget(targetId) {
	    _invariant2['default'](this.getTarget(targetId), 'Expected an existing target.');

	    delete this.handlers[targetId];
	    delete this.types[targetId];

	    this.actions.removeTarget(targetId);
	  };

	  HandlerRegistry.prototype.pinSource = function pinSource(sourceId) {
	    var source = this.getSource(sourceId);
	    _invariant2['default'](source, 'Expected an existing source.');

	    this.pinnedSourceId = sourceId;
	    this.pinnedSource = source;
	  };

	  HandlerRegistry.prototype.unpinSource = function unpinSource() {
	    _invariant2['default'](this.pinnedSource, 'No source is pinned at the time.');

	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  };

	  return HandlerRegistry;
	})();

	exports['default'] = HandlerRegistry;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 116 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = getNextUniqueId;
	var nextUniqueId = 0;

	function getNextUniqueId() {
	  return nextUniqueId++;
	}

	module.exports = exports["default"];

/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	exports.__esModule = true;

	var DragSource = (function () {
	  function DragSource() {
	    _classCallCheck(this, DragSource);
	  }

	  DragSource.prototype.canDrag = function canDrag() {
	    return true;
	  };

	  DragSource.prototype.isDragging = function isDragging(monitor, handle) {
	    return handle === monitor.getSourceId();
	  };

	  DragSource.prototype.endDrag = function endDrag() {};

	  return DragSource;
	})();

	exports["default"] = DragSource;
	module.exports = exports["default"];

/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	exports.__esModule = true;

	var DropTarget = (function () {
	  function DropTarget() {
	    _classCallCheck(this, DropTarget);
	  }

	  DropTarget.prototype.canDrop = function canDrop() {
	    return true;
	  };

	  DropTarget.prototype.hover = function hover() {};

	  DropTarget.prototype.drop = function drop() {};

	  return DropTarget;
	})();

	exports["default"] = DropTarget;
	module.exports = exports["default"];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;
	exports['default'] = createBackend;

	var _noop = __webpack_require__(120);

	var _noop2 = _interopRequireWildcard(_noop);

	var TestBackend = (function () {
	  function TestBackend(manager) {
	    _classCallCheck(this, TestBackend);

	    this.actions = manager.getActions();
	  }

	  TestBackend.prototype.setup = function setup() {
	    this.didCallSetup = true;
	  };

	  TestBackend.prototype.teardown = function teardown() {
	    this.didCallTeardown = true;
	  };

	  TestBackend.prototype.connectDragSource = function connectDragSource() {
	    return _noop2['default'];
	  };

	  TestBackend.prototype.connectDragPreview = function connectDragPreview() {
	    return _noop2['default'];
	  };

	  TestBackend.prototype.connectDropTarget = function connectDropTarget() {
	    return _noop2['default'];
	  };

	  TestBackend.prototype.simulateBeginDrag = function simulateBeginDrag(sourceIds, options) {
	    this.actions.beginDrag(sourceIds, options);
	  };

	  TestBackend.prototype.simulatePublishDragSource = function simulatePublishDragSource() {
	    this.actions.publishDragSource();
	  };

	  TestBackend.prototype.simulateHover = function simulateHover(targetIds, options) {
	    this.actions.hover(targetIds, options);
	  };

	  TestBackend.prototype.simulateDrop = function simulateDrop() {
	    this.actions.drop();
	  };

	  TestBackend.prototype.simulateEndDrag = function simulateEndDrag() {
	    this.actions.endDrag();
	  };

	  return TestBackend;
	})();

	function createBackend(manager) {
	  return new TestBackend(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = checkDecoratorArguments;

	function checkDecoratorArguments(functionName, signature) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    for (var i = 0; i < args.length; i++) {
	      var arg = args[i];
	      if (arg && arg.prototype && arg.prototype.render) {
	        console.error('You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _slice = Array.prototype.slice;
	exports['default'] = DragLayer;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(30);

	var _react2 = _interopRequireDefault(_react);

	var _dndCore = __webpack_require__(72);

	var _utilsShallowEqual = __webpack_require__(123);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(124);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashLangIsPlainObject = __webpack_require__(125);

	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _utilsCheckDecoratorArguments = __webpack_require__(121);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	function DragLayer(collect) {
	  var options = arguments[1] === undefined ? {} : arguments[1];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragLayer', 'collect[, options]'].concat(_slice.call(arguments)));
	  (0, _invariant2['default'])(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', collect);
	  (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html', options);

	  return function decorateLayer(DecoratedComponent) {
	    var _options$arePropsEqual = options.arePropsEqual;
	    var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    return (function (_Component) {
	      function DragLayerContainer(props, context) {
	        _classCallCheck(this, DragLayerContainer);

	        _Component.call(this, props);
	        this.handleChange = this.handleChange.bind(this);

	        this.manager = context.dragDropManager;
	        (0, _invariant2['default'])(typeof this.manager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	        this.state = this.getCurrentState();
	      }

	      _inherits(DragLayerContainer, _Component);

	      DragLayerContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	        return this.refs.child;
	      };

	      DragLayerContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        return !arePropsEqual(nextProps, this.props) || !(0, _utilsShallowEqual2['default'])(nextState, this.state);
	      };

	      DragLayerContainer.prototype.componentDidMount = function componentDidMount() {
	        var monitor = this.manager.getMonitor();
	        this.unsubscribe = monitor.subscribeToOffsetChange(this.handleChange);
	      };

	      DragLayerContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.unsubscribe();
	      };

	      DragLayerContainer.prototype.handleChange = function handleChange() {
	        var nextState = this.getCurrentState();
	        if (!(0, _utilsShallowEqual2['default'])(nextState, this.state)) {
	          this.setState(nextState);
	        }
	      };

	      DragLayerContainer.prototype.getCurrentState = function getCurrentState() {
	        var monitor = this.manager.getMonitor();
	        return collect(monitor);
	      };

	      DragLayerContainer.prototype.render = function render() {
	        return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	          ref: 'child' }));
	      };

	      _createClass(DragLayerContainer, null, [{
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }, {
	        key: 'displayName',
	        value: 'DragLayer(' + displayName + ')',
	        enumerable: true
	      }, {
	        key: 'contextTypes',
	        value: {
	          dragDropManager: _react.PropTypes.object.isRequired
	        },
	        enumerable: true
	      }]);

	      return DragLayerContainer;
	    })(_react.Component);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {

	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqualScalar;

	function shallowEqualScalar(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i])) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB || typeof valA === 'object' || typeof valB === 'object') {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(126),
	    isArguments = __webpack_require__(131),
	    isObjectLike = __webpack_require__(91);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(127),
	    keysIn = __webpack_require__(130);

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	module.exports = baseForIn;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(128);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(129);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(90);

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(131),
	    isArray = __webpack_require__(86),
	    isIndex = __webpack_require__(132),
	    isLength = __webpack_require__(92),
	    isObject = __webpack_require__(90);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(105),
	    isObjectLike = __webpack_require__(91);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 132 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DragSource;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(30);

	var _react2 = _interopRequireDefault(_react);

	var _utilsShallowEqual = __webpack_require__(123);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(124);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashLangIsPlainObject = __webpack_require__(125);

	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(121);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(134);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerSource = __webpack_require__(143);

	var _registerSource2 = _interopRequireDefault(_registerSource);

	var _createSourceFactory = __webpack_require__(144);

	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

	var _createSourceMonitor = __webpack_require__(145);

	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

	var _createSourceConnector = __webpack_require__(146);

	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

	var _utilsIsValidType = __webpack_require__(147);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DragSource(type, spec, collect) {
	  var options = arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    (0, _invariant2['default'])((0, _utilsIsValidType2['default'])(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', spec);
	  var createSource = (0, _createSourceFactory2['default'])(spec);
	  (0, _invariant2['default'])(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);
	  (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', collect);

	  return function decorateSource(DecoratedComponent) {
	    return (0, _decorateHandler2['default'])({
	      connectBackend: function connectBackend(backend, sourceId) {
	        return backend.connectDragSource(sourceId);
	      },
	      containerDisplayName: 'DragSource',
	      createHandler: createSource,
	      registerHandler: _registerSource2['default'],
	      createMonitor: _createSourceMonitor2['default'],
	      createConnector: _createSourceConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports['default'] = decorateHandler;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(30);

	var _react2 = _interopRequireDefault(_react);

	var _disposables = __webpack_require__(135);

	var _utilsShallowEqual = __webpack_require__(123);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(124);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _lodashLangIsPlainObject = __webpack_require__(125);

	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _bindConnector2 = __webpack_require__(140);

	var _bindConnector3 = _interopRequireDefault(_bindConnector2);

	function decorateHandler(_ref) {
	  var DecoratedComponent = _ref.DecoratedComponent;
	  var createHandler = _ref.createHandler;
	  var createMonitor = _ref.createMonitor;
	  var createConnector = _ref.createConnector;
	  var registerHandler = _ref.registerHandler;
	  var containerDisplayName = _ref.containerDisplayName;
	  var getType = _ref.getType;
	  var collect = _ref.collect;
	  var options = _ref.options;
	  var _options$arePropsEqual = options.arePropsEqual;
	  var arePropsEqual = _options$arePropsEqual === undefined ? _utilsShallowEqualScalar2['default'] : _options$arePropsEqual;

	  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	  return (function (_Component) {
	    function DragDropContainer(props, context) {
	      _classCallCheck(this, DragDropContainer);

	      _Component.call(this, props, context);
	      this.handleChange = this.handleChange.bind(this);
	      this.handleChildRef = this.handleChildRef.bind(this);

	      (0, _invariant2['default'])(typeof this.context.dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	      this.manager = this.context.dragDropManager;
	      this.handlerMonitor = createMonitor(this.manager);
	      this.handler = createHandler(this.handlerMonitor);
	      this.disposable = new _disposables.SerialDisposable();

	      this.receiveProps(props);
	      this.state = this.getCurrentState();
	    }

	    _inherits(DragDropContainer, _Component);

	    DragDropContainer.prototype.getHandlerId = function getHandlerId() {
	      return this.handlerId;
	    };

	    DragDropContainer.prototype.getDecoratedComponentInstance = function getDecoratedComponentInstance() {
	      return this.decoratedComponentInstance;
	    };

	    DragDropContainer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	      return !arePropsEqual(nextProps, this.props) || !(0, _utilsShallowEqual2['default'])(nextState, this.state);
	    };

	    DragDropContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      if (!arePropsEqual(nextProps, this.props)) {
	        this.receiveProps(nextProps);
	        this.handleChange();
	      }
	    };

	    DragDropContainer.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.disposable.dispose();
	    };

	    DragDropContainer.prototype.receiveProps = function receiveProps(props) {
	      this.handler.receiveProps(props);
	      this.receiveType(getType(props));
	    };

	    DragDropContainer.prototype.receiveType = function receiveType(type) {
	      if (type === this.currentType) {
	        return;
	      }

	      this.currentType = type;

	      var _registerHandler = registerHandler(type, this.handler, this.manager);

	      var handlerId = _registerHandler.handlerId;
	      var unregister = _registerHandler.unregister;

	      var connector = createConnector(this.manager.getBackend());

	      var _bindConnector = (0, _bindConnector3['default'])(connector, handlerId);

	      var handlerConnector = _bindConnector.handlerConnector;
	      var connectorDisposable = _bindConnector.disposable;

	      var globalMonitor = this.manager.getMonitor();
	      var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

	      this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unregister), new _disposables.Disposable(unsubscribe), connectorDisposable));

	      this.handlerMonitor.receiveHandlerId(handlerId);
	      this.handlerConnector = handlerConnector;
	      this.handlerId = handlerId;
	    };

	    DragDropContainer.prototype.handleChange = function handleChange() {
	      var nextState = this.getCurrentState();
	      if (!(0, _utilsShallowEqual2['default'])(nextState, this.state)) {
	        this.setState(nextState);
	      }
	    };

	    DragDropContainer.prototype.handleChildRef = function handleChildRef(component) {
	      this.decoratedComponentInstance = component;
	      this.handler.receiveComponent(component);
	    };

	    DragDropContainer.prototype.getCurrentState = function getCurrentState() {
	      var nextState = collect(this.handlerConnector, this.handlerMonitor);
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
	      }
	      return nextState;
	    };

	    DragDropContainer.prototype.render = function render() {
	      return _react2['default'].createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	        ref: this.handleChildRef }));
	    };

	    _createClass(DragDropContainer, null, [{
	      key: 'DecoratedComponent',
	      value: DecoratedComponent,
	      enumerable: true
	    }, {
	      key: 'displayName',
	      value: '' + containerDisplayName + '(' + displayName + ')',
	      enumerable: true
	    }, {
	      key: 'contextTypes',
	      value: {
	        dragDropManager: _react.PropTypes.object.isRequired
	      },
	      enumerable: true
	    }]);

	    return DragDropContainer;
	  })(_react.Component);
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _isDisposable2 = __webpack_require__(136);

	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

	exports.isDisposable = _isDisposable3['default'];

	var _Disposable2 = __webpack_require__(137);

	var _Disposable3 = _interopRequireWildcard(_Disposable2);

	exports.Disposable = _Disposable3['default'];

	var _CompositeDisposable2 = __webpack_require__(138);

	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

	exports.CompositeDisposable = _CompositeDisposable3['default'];

	var _SerialDisposable2 = __webpack_require__(139);

	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ },
/* 136 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isDisposable;

	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}

	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.__esModule = true;
	var noop = function noop() {};

	/**
	 * The basic disposable.
	 */

	var Disposable = (function () {
	  function Disposable(action) {
	    _classCallCheck(this, Disposable);

	    this.isDisposed = false;
	    this.action = action || noop;
	  }

	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };

	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);

	  return Disposable;
	})();

	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(136);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	/**
	 * Represents a group of disposable resources that are disposed together.
	 */

	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompositeDisposable);

	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }

	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }

	    this.disposables = disposables;
	    this.isDisposed = false;
	  }

	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */

	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };

	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */

	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }

	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }

	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };

	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */

	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }

	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;

	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };

	  return CompositeDisposable;
	})();

	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(136);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);

	    this.isDisposed = false;
	    this.current = null;
	  }

	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */

	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };

	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */

	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments[0] === undefined ? null : arguments[0];

	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }

	    var isDisposed = this.isDisposed;
	    var previous = undefined;

	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }

	    if (previous) {
	      previous.dispose();
	    }

	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };

	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */

	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;

	    if (previous) {
	      previous.dispose();
	    }
	  };

	  return SerialDisposable;
	})();

	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindConnector;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bindConnectorMethod2 = __webpack_require__(141);

	var _bindConnectorMethod3 = _interopRequireDefault(_bindConnectorMethod2);

	var _disposables = __webpack_require__(135);

	function bindConnector(connector, handlerId) {
	  var compositeDisposable = new _disposables.CompositeDisposable();
	  var handlerConnector = {};

	  Object.keys(connector).forEach(function (key) {
	    var _bindConnectorMethod = (0, _bindConnectorMethod3['default'])(handlerId, connector[key]);

	    var disposable = _bindConnectorMethod.disposable;
	    var ref = _bindConnectorMethod.ref;

	    compositeDisposable.add(disposable);
	    handlerConnector[key] = function () {
	      return ref;
	    };
	  });

	  return {
	    disposable: compositeDisposable,
	    handlerConnector: handlerConnector
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindConnectorMethod;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsShallowEqual = __webpack_require__(123);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsCloneWithRef = __webpack_require__(142);

	var _utilsCloneWithRef2 = _interopRequireDefault(_utilsCloneWithRef);

	var _disposables = __webpack_require__(135);

	var _react = __webpack_require__(30);

	function bindConnectorMethod(handlerId, connect) {
	  var disposable = new _disposables.SerialDisposable();

	  var currentNode = null;
	  var currentOptions = null;

	  function ref(nextWhatever, nextOptions) {
	    // If passed a ReactElement, clone it and attach this function as a ref.
	    // This helps us achieve a neat API where user doesn't even know that refs
	    // are being used under the hood.
	    if ((0, _react.isValidElement)(nextWhatever)) {
	      var nextElement = nextWhatever;
	      return (0, _utilsCloneWithRef2['default'])(nextElement, function (inst) {
	        return ref(inst, nextOptions);
	      });
	    }

	    // At this point we can only receive components or DOM nodes.
	    var nextNode = (0, _react.findDOMNode)(nextWhatever);

	    // If nothing changed, bail out of re-connecting the node to the backend.
	    if (nextNode === currentNode && (0, _utilsShallowEqual2['default'])(currentOptions, nextOptions)) {
	      return;
	    }

	    currentNode = nextNode;
	    currentOptions = nextOptions;

	    if (!nextNode) {
	      disposable.setDisposable(null);
	      return;
	    }

	    // Re-connect the node to the backend.
	    var currentDispose = connect(handlerId, nextNode, nextOptions);
	    disposable.setDisposable(new _disposables.Disposable(currentDispose));
	  }

	  return {
	    ref: ref,
	    disposable: disposable
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = cloneWithRef;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(30);

	function cloneWithRef(element, newRef) {
	  var previousRef = element.ref;
	  (0, _invariant2['default'])(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

	  return (0, _react.cloneElement)(element, {
	    ref: function ref(instance) {
	      newRef(instance);

	      if (previousRef) {
	        previousRef(instance);
	      }
	    }
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = registerSource;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	function registerSource(type, source, manager) {
	  var registry = manager.getRegistry();
	  var sourceId = registry.addSource(type, source);

	  function unregisterSource() {
	    registry.removeSource(sourceId);
	  };

	  return {
	    handlerId: sourceId,
	    unregister: unregisterSource
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashLangIsPlainObject = __webpack_require__(125);

	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'canDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];

	function createSourceFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    (0, _invariant2['default'])(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    (0, _invariant2['default'])(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	  REQUIRED_SPEC_METHODS.forEach(function (key) {
	    (0, _invariant2['default'])(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });

	  var Source = (function () {
	    function Source(monitor) {
	      _classCallCheck(this, Source);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Source.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Source.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Source.prototype.canDrag = function canDrag() {
	      if (!spec.canDrag) {
	        return true;
	      }

	      return spec.canDrag(this.props, this.monitor);
	    };

	    Source.prototype.isDragging = function isDragging(globalMonitor, sourceId) {
	      if (!spec.isDragging) {
	        return sourceId === globalMonitor.getSourceId();
	      }

	      return spec.isDragging(this.props, this.monitor);
	    };

	    Source.prototype.beginDrag = function beginDrag() {
	      var item = spec.beginDrag(this.props, this.monitor, this.component);
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html', item);
	      }
	      return item;
	    };

	    Source.prototype.endDrag = function endDrag() {
	      if (!spec.endDrag) {
	        return;
	      }

	      spec.endDrag(this.props, this.monitor, this.component);
	    };

	    return Source;
	  })();

	  return function createSource(monitor) {
	    return new Source(monitor);
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createSourceMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrag = false;
	var isCallingIsDragging = false;

	var SourceMonitor = (function () {
	  function SourceMonitor(manager) {
	    _classCallCheck(this, SourceMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  SourceMonitor.prototype.receiveHandlerId = function receiveHandlerId(sourceId) {
	    this.sourceId = sourceId;
	  };

	  SourceMonitor.prototype.canDrag = function canDrag() {
	    (0, _invariant2['default'])(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingCanDrag = true;
	      return this.internalMonitor.canDragSource(this.sourceId);
	    } finally {
	      isCallingCanDrag = false;
	    }
	  };

	  SourceMonitor.prototype.isDragging = function isDragging() {
	    (0, _invariant2['default'])(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');

	    try {
	      isCallingIsDragging = true;
	      return this.internalMonitor.isDraggingSource(this.sourceId);
	    } finally {
	      isCallingIsDragging = false;
	    }
	  };

	  SourceMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  SourceMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  SourceMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  SourceMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  SourceMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  SourceMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  SourceMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  SourceMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  SourceMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return SourceMonitor;
	})();

	function createSourceMonitor(manager) {
	  return new SourceMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 146 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createSourceConnector;

	function createSourceConnector(backend) {
	  return {
	    dragSource: backend.connectDragSource.bind(backend),
	    dragPreview: backend.connectDragPreview.bind(backend)
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isValidType;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashLangIsArray = __webpack_require__(86);

	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);

	function isValidType(type, allowArray) {
	       return typeof type === 'string' || typeof type === 'symbol' || allowArray && (0, _lodashLangIsArray2['default'])(type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}

	module.exports = exports['default'];

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports['default'] = DropTarget;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(30);

	var _react2 = _interopRequireDefault(_react);

	var _utilsShallowEqual = __webpack_require__(123);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsShallowEqualScalar = __webpack_require__(124);

	var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashLangIsPlainObject = __webpack_require__(125);

	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

	var _utilsCheckDecoratorArguments = __webpack_require__(121);

	var _utilsCheckDecoratorArguments2 = _interopRequireDefault(_utilsCheckDecoratorArguments);

	var _decorateHandler = __webpack_require__(134);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerTarget = __webpack_require__(149);

	var _registerTarget2 = _interopRequireDefault(_registerTarget);

	var _createTargetFactory = __webpack_require__(150);

	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

	var _createTargetMonitor = __webpack_require__(151);

	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

	var _createTargetConnector = __webpack_require__(152);

	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

	var _utilsIsValidType = __webpack_require__(147);

	var _utilsIsValidType2 = _interopRequireDefault(_utilsIsValidType);

	function DropTarget(type, spec, collect) {
	  var options = arguments[3] === undefined ? {} : arguments[3];

	  _utilsCheckDecoratorArguments2['default'].apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(_slice.call(arguments)));
	  var getType = type;
	  if (typeof type !== 'function') {
	    (0, _invariant2['default'])((0, _utilsIsValidType2['default'])(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', type);
	    getType = function () {
	      return type;
	    };
	  }
	  (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', spec);
	  var createTarget = (0, _createTargetFactory2['default'])(spec);
	  (0, _invariant2['default'])(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);
	  (0, _invariant2['default'])((0, _lodashLangIsPlainObject2['default'])(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', collect);

	  return function decorateTarget(DecoratedComponent) {
	    return (0, _decorateHandler2['default'])({
	      connectBackend: function connectBackend(backend, targetId) {
	        return backend.connectDropTarget(targetId);
	      },
	      containerDisplayName: 'DropTarget',
	      createHandler: createTarget,
	      registerHandler: _registerTarget2['default'],
	      createMonitor: _createTargetMonitor2['default'],
	      createConnector: _createTargetConnector2['default'],
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = registerTarget;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	function registerTarget(type, target, manager) {
	  var registry = manager.getRegistry();
	  var targetId = registry.addTarget(type, target);

	  function unregisterTarget() {
	    registry.removeTarget(targetId);
	  };

	  return {
	    handlerId: targetId,
	    unregister: unregisterTarget
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetFactory;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _lodashLangIsPlainObject = __webpack_require__(125);

	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);

	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

	function createTargetFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    (0, _invariant2['default'])(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    (0, _invariant2['default'])(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	  });

	  var Target = (function () {
	    function Target(monitor) {
	      _classCallCheck(this, Target);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    Target.prototype.receiveProps = function receiveProps(props) {
	      this.props = props;
	    };

	    Target.prototype.receiveMonitor = function receiveMonitor(monitor) {
	      this.monitor = monitor;
	    };

	    Target.prototype.receiveComponent = function receiveComponent(component) {
	      this.component = component;
	    };

	    Target.prototype.canDrop = function canDrop() {
	      if (!spec.canDrop) {
	        return true;
	      }

	      return spec.canDrop(this.props, this.monitor);
	    };

	    Target.prototype.hover = function hover() {
	      if (!spec.hover) {
	        return;
	      }

	      spec.hover(this.props, this.monitor, this.component);
	    };

	    Target.prototype.drop = function drop() {
	      if (!spec.drop) {
	        return;
	      }

	      var dropResult = spec.drop(this.props, this.monitor, this.component);
	      if (process.env.NODE_ENV !== 'production') {
	        (0, _invariant2['default'])(typeof dropResult === 'undefined' || (0, _lodashLangIsPlainObject2['default'])(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html', dropResult);
	      }
	      return dropResult;
	    };

	    return Target;
	  })();

	  return function createTarget(monitor) {
	    return new Target(monitor);
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createTargetMonitor;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(53);

	var _invariant2 = _interopRequireDefault(_invariant);

	var isCallingCanDrop = false;

	var TargetMonitor = (function () {
	  function TargetMonitor(manager) {
	    _classCallCheck(this, TargetMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  TargetMonitor.prototype.receiveHandlerId = function receiveHandlerId(targetId) {
	    this.targetId = targetId;
	  };

	  TargetMonitor.prototype.canDrop = function canDrop() {
	    (0, _invariant2['default'])(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html');

	    try {
	      isCallingCanDrop = true;
	      return this.internalMonitor.canDropOnTarget(this.targetId);
	    } finally {
	      isCallingCanDrop = false;
	    }
	  };

	  TargetMonitor.prototype.isOver = function isOver(options) {
	    return this.internalMonitor.isOverTarget(this.targetId, options);
	  };

	  TargetMonitor.prototype.getItemType = function getItemType() {
	    return this.internalMonitor.getItemType();
	  };

	  TargetMonitor.prototype.getItem = function getItem() {
	    return this.internalMonitor.getItem();
	  };

	  TargetMonitor.prototype.getDropResult = function getDropResult() {
	    return this.internalMonitor.getDropResult();
	  };

	  TargetMonitor.prototype.didDrop = function didDrop() {
	    return this.internalMonitor.didDrop();
	  };

	  TargetMonitor.prototype.getInitialClientOffset = function getInitialClientOffset() {
	    return this.internalMonitor.getInitialClientOffset();
	  };

	  TargetMonitor.prototype.getInitialSourceClientOffset = function getInitialSourceClientOffset() {
	    return this.internalMonitor.getInitialSourceClientOffset();
	  };

	  TargetMonitor.prototype.getSourceClientOffset = function getSourceClientOffset() {
	    return this.internalMonitor.getSourceClientOffset();
	  };

	  TargetMonitor.prototype.getClientOffset = function getClientOffset() {
	    return this.internalMonitor.getClientOffset();
	  };

	  TargetMonitor.prototype.getDifferenceFromInitialOffset = function getDifferenceFromInitialOffset() {
	    return this.internalMonitor.getDifferenceFromInitialOffset();
	  };

	  return TargetMonitor;
	})();

	function createTargetMonitor(manager) {
	  return new TargetMonitor(manager);
	}

	module.exports = exports['default'];

/***/ },
/* 152 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createTargetConnector;

	function createTargetConnector(backend) {
	  return {
	    dropTarget: backend.connectDropTarget.bind(backend)
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 153 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';
	var FixedDataTableRowDragDropConfig = {
	  type: 'column',
	  exchangeItemPosition: null,
	  drop: {
	    target: {
	      drop: function drop(props, monitor, component) {
	        var item = monitor.getItem();
	        return props.onDrop && props.onDrop(item, props);
	      },

	      hover: function hover(props, monitor, component) {
	        var item = monitor.getItem();
	        if (item.index !== props.index) {
	          return props.onDragDrop && props.onDragDrop(item, props);
	        }
	      },

	      canDrop: function canDrop(props, monitor) {
	        return !(props.data && props.data.noDroppable);
	      }
	    },

	    collect: function collect(connect, monitor) {
	      return {
	        connectDropTarget: connect.dropTarget(),
	        hovered: monitor.isOver() && monitor.canDrop()
	      };
	    }
	  },

	  drag: {
	    source: {
	      beginDrag: function beginDrag(props, monitor, component) {
	        return props;
	      },

	      endDrag: function endDrag(props, monitor, component) {
	        return props;
	      },

	      canDrag: function canDrag(props, monitor) {
	        return !!props.isSortable && !(props.data && props.data.noDraggable);
	      }
	    },

	    collect: function collect(connect, monitor) {
	      return {
	        connectDragSource: connect.dragSource(),
	        isDragging: monitor.isDragging()
	      };
	    }
	  }
	};

	module.exports = FixedDataTableRowDragDropConfig;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is to be used with the FixedDataTable. It is a read line
	 * that when you click on a column that is resizable appears and allows
	 * you to resize the corresponding column.
	 *
	 * @providesModule FixedDataTableColumnResizeHandle.react
	 * @typechecks
	 */

	'use strict';

	var DOMMouseMoveTracker = __webpack_require__(43);
	var Locale = __webpack_require__(28);
	var React = __webpack_require__(29);
	var ReactComponentWithPureRenderMixin = __webpack_require__(33);

	var clamp = __webpack_require__(58);
	var cx = __webpack_require__(48);

	var PropTypes = React.PropTypes;

	var FixedDataTableColumnResizeHandle = React.createClass({
	  displayName: 'FixedDataTableColumnResizeHandle',

	  mixins: [ReactComponentWithPureRenderMixin],

	  propTypes: {
	    visible: PropTypes.bool.isRequired,

	    /**
	     * This is the height of the line
	     */
	    height: PropTypes.number.isRequired,

	    /**
	     * Offset from left border of the table, please note
	     * that the line is a border on diff. So this is really the
	     * offset of the column itself.
	     */
	    leftOffset: PropTypes.number.isRequired,

	    /**
	     * Height of the clickable region of the line.
	     * This is assumed to be at the top of the line.
	     */
	    knobHeight: PropTypes.number.isRequired,

	    /**
	     * The line is a border on a diff, so this is essentially
	     * the width of column.
	     */
	    initialWidth: PropTypes.number,

	    /**
	     * The minimum width this dragger will collapse to
	     */
	    minWidth: PropTypes.number,

	    /**
	     * The maximum width this dragger will collapse to
	     */
	    maxWidth: PropTypes.number,

	    /**
	     * Initial click event on the header cell.
	     */
	    initialEvent: PropTypes.object,

	    /**
	     * When resizing is complete this is called.
	     */
	    onColumnResizeEnd: PropTypes.func,

	    /**
	     * Column key for the column being resized.
	     */
	    columnKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	  },

	  getInitialState: function getInitialState() /*object*/{
	    return {
	      width: 0,
	      cursorDelta: 0
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps( /*object*/newProps) {
	    if (newProps.initialEvent && !this._mouseMoveTracker.isDragging()) {
	      this._mouseMoveTracker.captureMouseMoves(newProps.initialEvent);
	      this.setState({
	        width: newProps.initialWidth,
	        cursorDelta: newProps.initialWidth
	      });
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    this._mouseMoveTracker = new DOMMouseMoveTracker(this._onMove, this._onColumnResizeEnd, document.body);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._mouseMoveTracker.releaseMouseMoves();
	    this._mouseMoveTracker = null;
	  },

	  render: function render() /*object*/{
	    var style = {
	      width: this.state.width,
	      height: this.props.height
	    };
	    if (Locale.isRTL()) {
	      style.right = this.props.leftOffset;
	    } else {
	      style.left = this.props.leftOffset;
	    }
	    return React.createElement(
	      'div',
	      {
	        className: cx({
	          'fixedDataTableColumnResizerLineLayout/main': true,
	          'fixedDataTableColumnResizerLineLayout/hiddenElem': !this.props.visible,
	          'public/fixedDataTableColumnResizerLine/main': true
	        }),
	        style: style },
	      React.createElement('div', {
	        className: cx('fixedDataTableColumnResizerLineLayout/mouseArea'),
	        style: { height: this.props.height }
	      })
	    );
	  },

	  _onMove: function _onMove( /*number*/deltaX) {
	    if (Locale.isRTL()) {
	      deltaX = -deltaX;
	    }
	    var newWidth = this.state.cursorDelta + deltaX;
	    var newColumnWidth = clamp(this.props.minWidth, newWidth, this.props.maxWidth);

	    // Please note cursor delta is the different between the currently width
	    // and the new width.
	    this.setState({
	      width: newColumnWidth,
	      cursorDelta: newWidth
	    });
	  },

	  _onColumnResizeEnd: function _onColumnResizeEnd() {
	    this._mouseMoveTracker.releaseMouseMoves();
	    this.props.onColumnResizeEnd(this.state.width, this.props.columnKey);
	  }
	});

	module.exports = FixedDataTableColumnResizeHandle;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableScrollHelper
	 * @typechecks
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var PrefixIntervalTree = __webpack_require__(156);
	var clamp = __webpack_require__(58);

	var BUFFER_ROWS = 5;
	var NO_ROWS_SCROLL_RESULT = {
	  index: 0,
	  offset: 0,
	  position: 0,
	  contentHeight: 0
	};

	var FixedDataTableScrollHelper = (function () {
	  function FixedDataTableScrollHelper(
	  /*number*/rowCount,
	  /*number*/defaultRowHeight,
	  /*number*/viewportHeight,
	  /*?function*/rowHeightGetter) {
	    _classCallCheck(this, FixedDataTableScrollHelper);

	    this._rowOffsets = PrefixIntervalTree.uniform(rowCount, defaultRowHeight);
	    this._storedHeights = new Array(rowCount);
	    for (var i = 0; i < rowCount; ++i) {
	      this._storedHeights[i] = defaultRowHeight;
	    }
	    this._rowCount = rowCount;
	    this._position = 0;
	    this._contentHeight = rowCount * defaultRowHeight;
	    this._defaultRowHeight = defaultRowHeight;
	    this._rowHeightGetter = rowHeightGetter ? rowHeightGetter : function () {
	      return defaultRowHeight;
	    };
	    this._viewportHeight = viewportHeight;
	    this.scrollRowIntoView = this.scrollRowIntoView.bind(this);
	    this.setViewportHeight = this.setViewportHeight.bind(this);
	    this.scrollBy = this.scrollBy.bind(this);
	    this.scrollTo = this.scrollTo.bind(this);
	    this.scrollToRow = this.scrollToRow.bind(this);
	    this.setRowHeightGetter = this.setRowHeightGetter.bind(this);
	    this.getContentHeight = this.getContentHeight.bind(this);
	    this.getRowPosition = this.getRowPosition.bind(this);

	    this._updateHeightsInViewport(0, 0);
	  }

	  _createClass(FixedDataTableScrollHelper, [{
	    key: 'setRowHeightGetter',
	    value: function setRowHeightGetter( /*function*/rowHeightGetter) {
	      this._rowHeightGetter = rowHeightGetter;
	    }
	  }, {
	    key: 'setViewportHeight',
	    value: function setViewportHeight( /*number*/viewportHeight) {
	      this._viewportHeight = viewportHeight;
	    }
	  }, {
	    key: 'getContentHeight',
	    value: function getContentHeight() /*number*/{
	      return this._contentHeight;
	    }
	  }, {
	    key: '_updateHeightsInViewport',
	    value: function _updateHeightsInViewport(
	    /*number*/firstRowIndex,
	    /*number*/firstRowOffset) {
	      var top = firstRowOffset;
	      var index = firstRowIndex;
	      while (top <= this._viewportHeight && index < this._rowCount) {
	        this._updateRowHeight(index);
	        top += this._storedHeights[index];
	        index++;
	      }
	    }
	  }, {
	    key: '_updateHeightsAboveViewport',
	    value: function _updateHeightsAboveViewport( /*number*/firstRowIndex) {
	      var index = firstRowIndex - 1;
	      while (index >= 0 && index >= firstRowIndex - BUFFER_ROWS) {
	        var delta = this._updateRowHeight(index);
	        this._position += delta;
	        index--;
	      }
	    }
	  }, {
	    key: '_updateRowHeight',
	    value: function _updateRowHeight( /*number*/rowIndex) /*number*/{
	      if (rowIndex < 0 || rowIndex >= this._rowCount) {
	        return 0;
	      }
	      var newHeight = this._rowHeightGetter(rowIndex);
	      if (newHeight !== this._storedHeights[rowIndex]) {
	        var change = newHeight - this._storedHeights[rowIndex];
	        this._rowOffsets.set(rowIndex, newHeight);
	        this._storedHeights[rowIndex] = newHeight;
	        this._contentHeight += change;
	        return change;
	      }
	      return 0;
	    }
	  }, {
	    key: 'getRowPosition',
	    value: function getRowPosition( /*number*/rowIndex) /*number*/{
	      this._updateRowHeight(rowIndex);
	      return this._rowOffsets.sumUntil(rowIndex);
	    }
	  }, {
	    key: 'scrollBy',
	    value: function scrollBy( /*number*/delta) /*object*/{
	      if (this._rowCount === 0) {
	        return NO_ROWS_SCROLL_RESULT;
	      }
	      var firstRow = this._rowOffsets.greatestLowerBound(this._position);
	      firstRow = clamp(0, firstRow, Math.max(this._rowCount - 1, 0));
	      var firstRowPosition = this._rowOffsets.sumUntil(firstRow);
	      var rowIndex = firstRow;
	      var position = this._position;

	      var rowHeightChange = this._updateRowHeight(rowIndex);
	      if (firstRowPosition !== 0) {
	        position += rowHeightChange;
	      }
	      var visibleRowHeight = this._storedHeights[rowIndex] - (position - firstRowPosition);

	      if (delta >= 0) {

	        while (delta > 0 && rowIndex < this._rowCount) {
	          if (delta < visibleRowHeight) {
	            position += delta;
	            delta = 0;
	          } else {
	            delta -= visibleRowHeight;
	            position += visibleRowHeight;
	            rowIndex++;
	          }
	          if (rowIndex < this._rowCount) {
	            this._updateRowHeight(rowIndex);
	            visibleRowHeight = this._storedHeights[rowIndex];
	          }
	        }
	      } else if (delta < 0) {
	        delta = -delta;
	        var invisibleRowHeight = this._storedHeights[rowIndex] - visibleRowHeight;

	        while (delta > 0 && rowIndex >= 0) {
	          if (delta < invisibleRowHeight) {
	            position -= delta;
	            delta = 0;
	          } else {
	            position -= invisibleRowHeight;
	            delta -= invisibleRowHeight;
	            rowIndex--;
	          }
	          if (rowIndex >= 0) {
	            var change = this._updateRowHeight(rowIndex);
	            invisibleRowHeight = this._storedHeights[rowIndex];
	            position += change;
	          }
	        }
	      }

	      var maxPosition = this._contentHeight - this._viewportHeight;
	      position = clamp(0, position, maxPosition);
	      this._position = position;
	      var firstRowIndex = this._rowOffsets.greatestLowerBound(position);
	      firstRowIndex = clamp(0, firstRowIndex, Math.max(this._rowCount - 1, 0));
	      firstRowPosition = this._rowOffsets.sumUntil(firstRowIndex);
	      var firstRowOffset = firstRowPosition - position;

	      this._updateHeightsInViewport(firstRowIndex, firstRowOffset);
	      this._updateHeightsAboveViewport(firstRowIndex);

	      return {
	        index: firstRowIndex,
	        offset: firstRowOffset,
	        position: this._position,
	        contentHeight: this._contentHeight
	      };
	    }
	  }, {
	    key: '_getRowAtEndPosition',
	    value: function _getRowAtEndPosition( /*number*/rowIndex) /*number*/{
	      // We need to update enough rows above the selected one to be sure that when
	      // we scroll to selected position all rows between first shown and selected
	      // one have most recent heights computed and will not resize
	      this._updateRowHeight(rowIndex);
	      var currentRowIndex = rowIndex;
	      var top = this._storedHeights[currentRowIndex];
	      while (top < this._viewportHeight && currentRowIndex >= 0) {
	        currentRowIndex--;
	        if (currentRowIndex >= 0) {
	          this._updateRowHeight(currentRowIndex);
	          top += this._storedHeights[currentRowIndex];
	        }
	      }
	      var position = this._rowOffsets.sumTo(rowIndex) - this._viewportHeight;
	      if (position < 0) {
	        position = 0;
	      }
	      return position;
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo( /*number*/position) /*object*/{
	      if (this._rowCount === 0) {
	        return NO_ROWS_SCROLL_RESULT;
	      }
	      if (position <= 0) {
	        // If position less than or equal to 0 first row should be fully visible
	        // on top
	        this._position = 0;
	        this._updateHeightsInViewport(0, 0);

	        return {
	          index: 0,
	          offset: 0,
	          position: this._position,
	          contentHeight: this._contentHeight
	        };
	      } else if (position >= this._contentHeight - this._viewportHeight) {
	        // If position is equal to or greater than max scroll value, we need
	        // to make sure to have bottom border of last row visible.
	        var rowIndex = this._rowCount - 1;
	        position = this._getRowAtEndPosition(rowIndex);
	      }
	      this._position = position;

	      var firstRowIndex = this._rowOffsets.greatestLowerBound(position);
	      firstRowIndex = clamp(0, firstRowIndex, Math.max(this._rowCount - 1, 0));
	      var firstRowPosition = this._rowOffsets.sumUntil(firstRowIndex);
	      var firstRowOffset = firstRowPosition - position;

	      this._updateHeightsInViewport(firstRowIndex, firstRowOffset);
	      this._updateHeightsAboveViewport(firstRowIndex);

	      return {
	        index: firstRowIndex,
	        offset: firstRowOffset,
	        position: this._position,
	        contentHeight: this._contentHeight
	      };
	    }

	    /**
	     * Allows to scroll to selected row with specified offset. It always
	     * brings that row to top of viewport with that offset
	     */
	  }, {
	    key: 'scrollToRow',
	    value: function scrollToRow( /*number*/rowIndex, /*number*/offset) /*object*/{
	      rowIndex = clamp(0, rowIndex, Math.max(this._rowCount - 1, 0));
	      offset = clamp(-this._storedHeights[rowIndex], offset, 0);
	      var firstRow = this._rowOffsets.sumUntil(rowIndex);
	      return this.scrollTo(firstRow - offset);
	    }

	    /**
	     * Allows to scroll to selected row by bringing it to viewport with minimal
	     * scrolling. This that if row is fully visible, scroll will not be changed.
	     * If top border of row is above top of viewport it will be scrolled to be
	     * fully visible on the top of viewport. If the bottom border of row is
	     * below end of viewport, it will be scrolled up to be fully visible on the
	     * bottom of viewport.
	     */
	  }, {
	    key: 'scrollRowIntoView',
	    value: function scrollRowIntoView( /*number*/rowIndex) /*object*/{
	      rowIndex = clamp(0, rowIndex, Math.max(this._rowCount - 1, 0));
	      var rowBegin = this._rowOffsets.sumUntil(rowIndex);
	      var rowEnd = rowBegin + this._storedHeights[rowIndex];
	      if (rowBegin < this._position) {
	        return this.scrollTo(rowBegin);
	      } else if (this._position + this._viewportHeight < rowEnd) {
	        var position = this._getRowAtEndPosition(rowIndex);
	        return this.scrollTo(position);
	      }
	      return this.scrollTo(this._position);
	    }
	  }]);

	  return FixedDataTableScrollHelper;
	})();

	module.exports = FixedDataTableScrollHelper;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PrefixIntervalTree
	 * 
	 * @typechecks
	 */

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(53);

	var parent = function parent(node) {
	  return Math.floor(node / 2);
	};

	var Int32Array = global.Int32Array || function (size) {
	  var xs = [];
	  for (var i = size - 1; i >= 0; --i) {
	    xs[i] = 0;
	  }
	  return xs;
	};

	/**
	 * Computes the next power of 2 after or equal to x.
	 */
	function ceilLog2(x) {
	  var y = 1;
	  while (y < x) {
	    y *= 2;
	  }
	  return y;
	}

	/**
	 * A prefix interval tree stores an numeric array and the partial sums of that
	 * array. It is optimized for updating the values of the array without
	 * recomputing all of the partial sums.
	 *
	 *   - O(ln n) update
	 *   - O(1) lookup
	 *   - O(ln n) compute a partial sum
	 *   - O(n) space
	 *
	 * Note that the sequence of partial sums is one longer than the array, so that
	 * the first partial sum is always 0, and the last partial sum is the sum of the
	 * entire array.
	 */

	var PrefixIntervalTree = (function () {
	  function PrefixIntervalTree(xs) {
	    _classCallCheck(this, PrefixIntervalTree);

	    this._size = xs.length;
	    this._half = ceilLog2(this._size);
	    this._heap = new Int32Array(2 * this._half);

	    var i;
	    for (i = 0; i < this._size; ++i) {
	      this._heap[this._half + i] = xs[i];
	    }

	    for (i = this._half - 1; i > 0; --i) {
	      this._heap[i] = this._heap[2 * i] + this._heap[2 * i + 1];
	    }
	  }

	  _createClass(PrefixIntervalTree, [{
	    key: 'set',
	    value: function set(index, value) {
	      invariant(0 <= index && index < this._size, 'Index out of range %s', index);

	      var node = this._half + index;
	      this._heap[node] = value;

	      node = parent(node);
	      for (; node !== 0; node = parent(node)) {
	        this._heap[node] = this._heap[2 * node] + this._heap[2 * node + 1];
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get(index) {
	      invariant(0 <= index && index < this._size, 'Index out of range %s', index);

	      var node = this._half + index;
	      return this._heap[node];
	    }
	  }, {
	    key: 'getSize',
	    value: function getSize() {
	      return this._size;
	    }

	    /**
	     * Returns the sum get(0) + get(1) + ... + get(end - 1).
	     */
	  }, {
	    key: 'sumUntil',
	    value: function sumUntil(end) {
	      invariant(0 <= end && end < this._size + 1, 'Index out of range %s', end);

	      if (end === 0) {
	        return 0;
	      }

	      var node = this._half + end - 1;
	      var sum = this._heap[node];
	      for (; node !== 1; node = parent(node)) {
	        if (node % 2 === 1) {
	          sum += this._heap[node - 1];
	        }
	      }

	      return sum;
	    }

	    /**
	     * Returns the sum get(0) + get(1) + ... + get(inclusiveEnd).
	     */
	  }, {
	    key: 'sumTo',
	    value: function sumTo(inclusiveEnd) {
	      invariant(0 <= inclusiveEnd && inclusiveEnd < this._size, 'Index out of range %s', inclusiveEnd);
	      return this.sumUntil(inclusiveEnd + 1);
	    }

	    /**
	     * Returns the sum get(begin) + get(begin + 1) + ... + get(end - 1).
	     */
	  }, {
	    key: 'sum',
	    value: function sum(begin, end) {
	      invariant(begin <= end, 'Begin must precede end');
	      return this.sumUntil(end) - this.sumUntil(begin);
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) <= t, or
	     * -1 if no such i exists.
	     */
	  }, {
	    key: 'greatestLowerBound',
	    value: function greatestLowerBound(t) {
	      if (t < 0) {
	        return -1;
	      }

	      var node = 1;
	      if (this._heap[node] <= t) {
	        return this._size;
	      }

	      while (node < this._half) {
	        var leftSum = this._heap[2 * node];
	        if (t < leftSum) {
	          node = 2 * node;
	        } else {
	          node = 2 * node + 1;
	          t -= leftSum;
	        }
	      }

	      return node - this._half;
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and sumUntil(i) < t, or
	     * -1 if no such i exists.
	     */
	  }, {
	    key: 'greatestStrictLowerBound',
	    value: function greatestStrictLowerBound(t) {
	      if (t <= 0) {
	        return -1;
	      }

	      var node = 1;
	      if (this._heap[node] < t) {
	        return this._size;
	      }

	      while (node < this._half) {
	        var leftSum = this._heap[2 * node];
	        if (t <= leftSum) {
	          node = 2 * node;
	        } else {
	          node = 2 * node + 1;
	          t -= leftSum;
	        }
	      }

	      return node - this._half;
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and t <= sumUntil(i), or
	     * size + 1 if no such i exists.
	     */
	  }, {
	    key: 'leastUpperBound',
	    value: function leastUpperBound(t) {
	      return this.greatestStrictLowerBound(t) + 1;
	    }

	    /**
	     * Returns the smallest i such that 0 <= i <= size and t < sumUntil(i), or
	     * size + 1 if no such i exists.
	     */
	  }, {
	    key: 'leastStrictUpperBound',
	    value: function leastStrictUpperBound(t) {
	      return this.greatestLowerBound(t) + 1;
	    }
	  }], [{
	    key: 'uniform',
	    value: function uniform(size, initialValue) {
	      var xs = [];
	      for (var i = size - 1; i >= 0; --i) {
	        xs[i] = initialValue;
	      }

	      return new PrefixIntervalTree(xs);
	    }
	  }, {
	    key: 'empty',
	    value: function empty(size) {
	      return PrefixIntervalTree.uniform(size, 0);
	    }
	  }]);

	  return PrefixIntervalTree;
	})();

	module.exports = PrefixIntervalTree;

	/**
	 * Number of elements in the array
	 */

	/**
	 * Half the size of the heap. It is also the number of non-leaf nodes, and the
	 * index of the first element in the heap. Always a power of 2.
	 */

	/**
	 * Binary heap
	 */
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FixedDataTableWidthHelper
	 * @typechecks
	 */

	'use strict';

	var React = __webpack_require__(29);

	function getTotalWidth( /*array*/columns) /*number*/{
	  var totalWidth = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    totalWidth += columns[i].props.width;
	  }
	  return totalWidth;
	}

	function getTotalFlexGrow( /*array*/columns) /*number*/{
	  var totalFlexGrow = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    totalFlexGrow += columns[i].props.flexGrow || 0;
	  }
	  return totalFlexGrow;
	}

	function distributeFlexWidth(
	/*array*/columns,
	/*number*/flexWidth) /*object*/{
	  if (flexWidth <= 0) {
	    return {
	      columns: columns,
	      width: getTotalWidth(columns)
	    };
	  }
	  var remainingFlexGrow = getTotalFlexGrow(columns);
	  var remainingFlexWidth = flexWidth;
	  var newColumns = [];
	  var totalWidth = 0;
	  for (var i = 0; i < columns.length; ++i) {
	    var column = columns[i];
	    if (!column.props.flexGrow) {
	      totalWidth += column.props.width;
	      newColumns.push(column);
	      continue;
	    }
	    var columnFlexWidth = Math.floor(column.props.flexGrow / remainingFlexGrow * remainingFlexWidth);
	    var newColumnWidth = Math.floor(column.props.width + columnFlexWidth);
	    totalWidth += newColumnWidth;

	    remainingFlexGrow -= column.props.flexGrow;
	    remainingFlexWidth -= columnFlexWidth;

	    newColumns.push(React.cloneElement(column, { width: newColumnWidth }));
	  }

	  return {
	    columns: newColumns,
	    width: totalWidth
	  };
	}

	function adjustColumnGroupWidths(
	/*array*/columnGroups,
	/*number*/expectedWidth) /*object*/{
	  var allColumns = [];
	  var i;
	  for (i = 0; i < columnGroups.length; ++i) {
	    React.Children.forEach(columnGroups[i].props.children, function (column) {
	      allColumns.push(column);
	    });
	  }
	  var columnsWidth = getTotalWidth(allColumns);
	  var remainingFlexGrow = getTotalFlexGrow(allColumns);
	  var remainingFlexWidth = Math.max(expectedWidth - columnsWidth, 0);

	  var newAllColumns = [];
	  var newColumnGroups = [];

	  for (i = 0; i < columnGroups.length; ++i) {
	    var columnGroup = columnGroups[i];
	    var currentColumns = [];

	    React.Children.forEach(columnGroup.props.children, function (column) {
	      currentColumns.push(column);
	    });

	    var columnGroupFlexGrow = getTotalFlexGrow(currentColumns);
	    var columnGroupFlexWidth = Math.floor(columnGroupFlexGrow / remainingFlexGrow * remainingFlexWidth);

	    var newColumnSettings = distributeFlexWidth(currentColumns, columnGroupFlexWidth);

	    remainingFlexGrow -= columnGroupFlexGrow;
	    remainingFlexWidth -= columnGroupFlexWidth;

	    for (var j = 0; j < newColumnSettings.columns.length; ++j) {
	      newAllColumns.push(newColumnSettings.columns[j]);
	    }

	    newColumnGroups.push(React.cloneElement(columnGroup, { width: newColumnSettings.width }));
	  }

	  return {
	    columns: newAllColumns,
	    columnGroups: newColumnGroups
	  };
	}

	function adjustColumnWidths(
	/*array*/columns,
	/*number*/expectedWidth) /*array*/{
	  var columnsWidth = getTotalWidth(columns);
	  if (columnsWidth < expectedWidth) {
	    return distributeFlexWidth(columns, expectedWidth - columnsWidth).columns;
	  }
	  return columns;
	}

	var FixedDataTableWidthHelper = {
	  getTotalWidth: getTotalWidth,
	  getTotalFlexGrow: getTotalFlexGrow,
	  distributeFlexWidth: distributeFlexWidth,
	  adjustColumnWidths: adjustColumnWidths,
	  adjustColumnGroupWidths: adjustColumnGroupWidths
	};

	module.exports = FixedDataTableWidthHelper;

/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule debounceCore
	 * @typechecks
	 */

	/**
	 * Invokes the given callback after a specified number of milliseconds have
	 * elapsed, ignoring subsequent calls.
	 *
	 * For example, if you wanted to update a preview after the user stops typing
	 * you could do the following:
	 *
	 *   elem.addEventListener('keyup', debounce(this.updatePreview, 250), false);
	 *
	 * The returned function has a reset method which can be called to cancel a
	 * pending invocation.
	 *
	 *   var debouncedUpdatePreview = debounce(this.updatePreview, 250);
	 *   elem.addEventListener('keyup', debouncedUpdatePreview, false);
	 *
	 *   // later, to cancel pending calls
	 *   debouncedUpdatePreview.reset();
	 *
	 * @param {function} func - the function to debounce
	 * @param {number} wait - how long to wait in milliseconds
	 * @param {*} context - optional context to invoke the function in
	 * @param {?function} setTimeoutFunc - an implementation of setTimeout
	 *  if nothing is passed in the default setTimeout function is used
	  * @param {?function} clearTimeoutFunc - an implementation of clearTimeout
	 *  if nothing is passed in the default clearTimeout function is used
	 */
	"use strict";

	function debounce(func, wait, context, setTimeoutFunc, clearTimeoutFunc) {
	  setTimeoutFunc = setTimeoutFunc || setTimeout;
	  clearTimeoutFunc = clearTimeoutFunc || clearTimeout;
	  var timeout;

	  function debouncer() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    debouncer.reset();

	    var callback = function callback() {
	      func.apply(context, args);
	    };
	    callback.__SMmeta = func.__SMmeta;
	    timeout = setTimeoutFunc(callback, wait);
	  }

	  debouncer.reset = function () {
	    clearTimeoutFunc(timeout);
	  };

	  return debouncer;
	}

	module.exports = debounce;

/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 */

	'use strict';

	/**
	 * Performs equality by iterating through keys on an object and returning
	 * false when any key has values which are not strictly equal between
	 * objA and objB. Returns true when the values of all keys are strictly equal.
	 *
	 * @return {boolean}
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ }
/******/ ])
});
;