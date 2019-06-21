import React, { Component } from 'react';
import Theme from './Theme';

class Content extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="artical">
            6月12日晚间消息，格力电器发文表示，将继续通过各类渠道不限量购买奥克斯空调股份有限公司生产的相关空调产品，并通过自有实验室、委托第三方权威检测机构和免费提供给任何有资质的机构进行检测。
          </div>
        </div>
        <Theme />
      </div>
    );
  }
}

export default Content;
