import React from 'react';
import Button from '../../style/components/button';
import Page from '../../style/components/page';
import Actionsheet from '../../style/components/actionsheet';

class PageActionsheet extends React.Component {
  constructor(props) {
      super(props);
      this.toggleActionsheet = this.toggleActionsheet.bind(this);
  }

  toggleActionsheet(){
    let as1 = this.refs.as1;
    as1.setState({'show':!as1.state.show});
  }

  render() {
    let actions = [
      {label:"取消",onClick:this.toggleActionsheet.bind(this)},
    ];
    let menus = [
      {label:"示例菜单",onClick:this.toggleActionsheet},
      {label:"示例菜单",onClick:this.toggleActionsheet},
      {label:"示例菜单",onClick:this.toggleActionsheet},
      {label:"示例菜单",onClick:this.toggleActionsheet}
    ];

    return (
      <Page title="Actionsheet" className="actionsheet">
        <div className="bd spacing">
          <Button
          type="primary"
          onClick={this.toggleActionsheet}>
            点击上拉ActionSheet
          </Button>
          <Actionsheet ref="as1" actions={actions} menus={menus} onMaskClick={this.toggleActionsheet}/>
        </div>
      </Page>
    );
  }
}


export default PageActionsheet;