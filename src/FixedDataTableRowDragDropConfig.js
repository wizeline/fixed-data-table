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
      drop: function (props, monitor, component) {
        var item = monitor.getItem();
        return props.onDrop && props.onDrop(item, props);
      },

      hover: function (props, monitor, component) {
        var item = monitor.getItem();
        if (item.index !== props.index) {
          return props.onDragDrop && props.onDragDrop(item, props);
        }
      }
    },

    collect: function (connect, monitor) {
      return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
      };
    }
  },

  drag: {
    source: {
      beginDrag: function (props, monitor, component) {
        return props;
      },

      endDrag: function (props, monitor, component) {
        return props;
      },

      canDrag: function (props, monitor) {
        return !!props.isSortable;
      }
    },

    collect: function (connect, monitor) {
      return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
      };
    }
  }
};

module.exports = FixedDataTableRowDragDropConfig;

