var React = require('react');
var uskin = require('uskin');
var Table = uskin.Table;
var DropdownButton = uskin.DropdownButton;

function displayClose(e) {
  var tarID = e.target.id;
  var display = document.getElementById('s'+tarID).style.display;
  (display === 'none') && (document.getElementById('s'+tarID).style.display = 'block');
  (display === 'block') && (document.getElementById('s'+tarID).style.display = 'none');
}

var column = [{
  title: '属性',
  width: '150px',
  key: "property",
  dataIndex: 'property'
}, {
  title: '说明',
  key: "explain",
  dataIndex: 'explain',
  render: function(col, item, index) {
    return <div style={{wordWrap: 'break-word'}}>{item.explain}</div>;
  }
}, {
  title: '类型',
  width: '100px',
  key: "type",
  dataIndex: 'type',
}, {
  title: '默认值',
  width: '150px',
  key: "defaultValue",
  dataIndex: 'defaultValue',
}];

function listener(e) {
  console.debug('click triggered!', e);
}

var data = [{
  property: 'buttonData',
  explain: '定义相关属性决定按钮显示的文字和icon',
  type: 'object',
  defaultValue: '-',
  id: '1'
}, {
  property: 'dropdownItems',
  explain: '包含下拉菜单内容的数组，下拉菜单为分组显示',
  type: 'array',
  defaultValue: '-',
  id: '2'
}, {
  property: 'dropdownOnClick',
  explain: '添加点击btn的事件，点击下拉菜单中的任意按钮会触发事件',
  type: 'function',
  defaultValue: '-',
  id: '3'
}, {
  property: 'disabled',
  explain: '决定按钮是否被禁用',
  type: 'boolean',
  defaultValue: 'false',
  id: '4'
}];

var btn = {
  value: 'Dropdown Button',
  iconClass: 'more'
};

var dropdownItems = [{
  items: [{
    title: 'Reboot',
    key: '0'
  }, {
    title: 'Take Image Snapshot',
    key: '1'
  }]
}, {
  items: [{
    title: 'Associate Public IP',
    key: '2'
  }, {
    title: 'Dissociate Public IP',
    key: '3'
  }, {
    title: 'Join Networks',
    key: '4'
  }]
}, {
  items: [{
    title: 'Change Security Group',
    key: '5'
  }, {
    title: 'Change Passoword',
    key: '6'
  }, {
    title: 'Change Keypair',
    key: '7'
  }]
}, {
  items: [{
    title: 'Add Volume',
    key: '8'
  }, {
    title: 'Remove Volume',
    key: '9',
    disabled: true
  }]
}, {
  items: [{
    title: 'Terminate',
    key: '10',
    danger: true
  }]
}];

class IntroDropdownButton extends React.Component {
  render() {
    return (
      <div>
        <article>
          <h1>DropdownButton</h1>
          <p>Click the button and show the dropdown menu.</p>
        </article>
        <h2>Code Demos</h2>
        <div className="left">
          <div className="contain">
            <div className="component" style={{height: '460px'}}>
              <DropdownButton buttonData={btn} dropdownItems={dropdownItems} dropdownOnClick={listener}/>
              <DropdownButton disabled={true} buttonData={btn} dropdownItems={dropdownItems} dropdownOnClick={listener}/>
            </div>
            <div>
              <p className="title">下拉菜单按钮及按钮的禁用</p>
              <p className="content">点击按钮会弹出下拉菜单，下拉菜单中的条目会分组显示</p>
              <p className="code-show" id="code1" onClick={displayClose}>+</p>
            </div>
            <div className="code" id="scode1" style={{display: 'none'}}>
              <pre>
                <code className="javascript">
                  var DropdownButton = uskin.DropdownButton;<br/><br/>
                  ReactDOM.render(&lt;div><br/>
                    &nbsp;&nbsp;&lt;DropdownButton buttonData=&#123;btn} dropdownItems=&#123;dropdownItems} dropdownOnClick=&#123;listener} /><br/>
                  &lt;/div>, mountNode);
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="api">
          <h2>Attributes</h2>
          <div>
            <p></p>
            <div>
              <Table
                width="90%"
                column={column}
                data={data}
                dataKey={'id'}
                checkbox={false}
                striped={false}
                hover={false}/>
            </div>
          </div>
        </div>

        <div className="param">
          <h2>Parameters</h2>
          <div className="left">
            <div className="contain">
              <div>
                <p className="title">buttonData属性的传参</p>
                <p className="content">传参类型为object，定义按钮的显示信息</p>
              </div>
              <div className="code">
                <pre>
                  <code className="javascript">
                    var btn = &#123;<br/>
                    &nbsp;&nbsp;value: 'Dropdown Button',<br/>
                    &nbsp;&nbsp;iconClass: 'more'<br/>
                  };
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contain">
              <div>
                <p className="title">dropdownItems属性的传参</p>
                <p className="content">传参类型为array，定义下拉菜单的显示内容</p>
              </div>
              <div className="code">
                <pre>
                  <code className="javascript">
                    var dropdownItems = [&#123;<br/>
                    &nbsp;&nbsp;items: [&#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Reboot',<br/>
                    &nbsp;&nbsp;&nbsp;key: '0'<br/>
                    &nbsp;&nbsp;}, &#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Take Image Snapshot',<br/>
                    &nbsp;&nbsp;&nbsp;key: '1'<br/>
                    &nbsp;&nbsp;}]<br/>
                  }, &#123;<br/>
                    &nbsp;&nbsp;items: [&#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Associate Public IP',<br/>
                    &nbsp;&nbsp;&nbsp;key: '2'<br/>
                    &nbsp;&nbsp;}, &#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Dissociate Public IP',<br/>
                    &nbsp;&nbsp;&nbsp;key: '3'<br/>
                    &nbsp;&nbsp;}, &#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Join Networks',<br/>
                    &nbsp;&nbsp;&nbsp;key: '4'<br/>
                    &nbsp;&nbsp;}]<br/>
                  }, &#123;<br/>
                    &nbsp;&nbsp;items: [&#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Change Security Group',<br/>
                    &nbsp;&nbsp;&nbsp;key: '5'<br/>
                    &nbsp;&nbsp;}, &#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Change Passoword',<br/>
                    &nbsp;&nbsp;&nbsp;key: '6'<br/>
                    &nbsp;&nbsp;}, &#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Change Keypair',<br/>
                    &nbsp;&nbsp;&nbsp;key: '7'<br/>
                    &nbsp;&nbsp;}]<br/>
                  }, &#123;<br/>
                    &nbsp;&nbsp;items: [&#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Add Volume',<br/>
                    &nbsp;&nbsp;&nbsp;key: '8'<br/>
                    &nbsp;&nbsp;}, &#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Remove Volume',<br/>
                    &nbsp;&nbsp;&nbsp;key: '9',<br/>
                    &nbsp;&nbsp;&nbsp;disabled: true<br/>
                    &nbsp;&nbsp;}]<br/>
                  }, &#123;<br/>
                    &nbsp;&nbsp;items: [&#123;<br/>
                    &nbsp;&nbsp;&nbsp;title: 'Terminate',<br/>
                    &nbsp;&nbsp;&nbsp;key: '10',<br/>
                    &nbsp;&nbsp;&nbsp;danger: true<br/>
                    &nbsp;&nbsp;}]<br/>
                  }];
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = IntroDropdownButton;