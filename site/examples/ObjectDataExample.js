/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

var ROWS = 1000000;

var ExampleImage = require('./ExampleImage');
var FakeObjectDataListStore = require('./FakeObjectDataListStore');

var FixedDataTable = require('fixed-data-table');
var React = require('react');

var PropTypes = React.PropTypes;
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;

var update = require('react/lib/update');

function renderImage(/*string*/ cellData) {
  return <ExampleImage src={cellData} />;
}

function renderLink(/*string*/ cellData) {
  return <a href="#">{cellData}</a>;
}

function renderDate(/*object*/ cellData) {
  return <span>{cellData.toLocaleString()}</span>;
}

var ObjectDataExample = React.createClass({

  propTypes: {
    onContentDimensionsChange: PropTypes.func,
    left: PropTypes.number,
    top: PropTypes.number,
  },

  _onContentHeightChange(contentHeight) {
    this.props.onContentDimensionsChange &&
      this.props.onContentDimensionsChange(contentHeight, 1150);
  },

  getInitialState() {
    return {
      dataList: new FakeObjectDataListStore(ROWS)
    }
  },

  _rowGetter(index){
    return this.state.dataList.getObjectAt(index);
  },

  // Each user should implement his own item interaction
  _changeItemPosition(item, afterItem) {
    var items = this.state.dataList._cache;
    var itemIndex = items.indexOf(item.data);
    var afterItemIndex = items.indexOf(afterItem.data);

    if(itemIndex === afterItemIndex) {
      return;
    }

    var stateUpdate = {
      dataList: {
        _cache: {
          $splice: [
            [itemIndex, 1],
            [afterItemIndex, 0, item.data]
          ]
        }
      }
    };

    this.setState(update(this.state, stateUpdate));
  },

  render() {
    var controlledScrolling =
      this.props.left !== undefined || this.props.top !== undefined;

    return (
      <Table
        rowHeight={50}
        headerHeight={50}
        rowGetter={this._rowGetter}
        onDragDrop={this._changeItemPosition}
        rowsCount={this.state.dataList.getSize()}
        width={this.props.tableWidth}
        height={this.props.tableHeight}
        onContentHeightChange={this._onContentHeightChange}
        isSortable={true}
        scrollTop={this.props.top}
        scrollLeft={this.props.left}
        overflowX={controlledScrolling ? "hidden" : "auto"}
        overflowY={controlledScrolling ? "hidden" : "auto"}>
        <Column
          cellRenderer={renderImage}
          dataKey="avartar"
          fixed={true}
          label=""
          width={50}
        />
        <Column
          dataKey="firstName"
          fixed={true}
          label="First Name"
          width={100}
        />
        <Column
          dataKey="lastName"
          fixed={true}
          label="Last Name"
          width={100}
        />
        <Column
          dataKey="city"
          label="City"
          width={100}
        />
        <Column
          label="Street"
          width={200}
          dataKey="street"
        />
        <Column
          label="Zip Code"
          width={200}
          dataKey="zipCode"
        />
        <Column
          cellRenderer={renderLink}
          label="Email"
          width={200}
          dataKey="email"
        />
        <Column
          cellRenderer={renderDate}
          label="DOB"
          width={200}
          dataKey="date"
        />
      </Table>
    );
  },
});

module.exports = ObjectDataExample;
