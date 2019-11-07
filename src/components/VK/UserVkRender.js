import React from 'react';

class UserVkRender extends React.Component {
  render()
    {
      let sex=this.props.sex
      let date=this.props.bdate
      let messageSex=""
      let messageDate=""
      let warning=""
      if (sex===0) messageSex="не указан"
      if (sex===1) messageSex="женский"
      if (sex===2) messageSex="мужской"
      if (!date) {messageDate="не указана"} else {messageDate=this.props.bdate}
      if (this.props.status) {warning="wrapper__vk__border__form__inputText__id--false"} else {warning="wrapper__vk__border__form__inputText__id--true"}
      return (
        <div className="wrapper__vk__border">
          <form onSubmit={this.props.userMethod} className="wrapper__vk__border__form">
            <div className="wrapper__vk__border__form__inputText">
              <input type="text" name="id" className={warning} autoComplete="off"/>
            </div>
            <div className="wrapper__vk__border__form__button">
              <button className="wrapper__vk__border__form__button__search">Найти</button>
            </div>
          </form>
          {this.props.firstName &&
            <div className="wrapper__vk__border__info">
              <div className="wrapper__vk__border__info__image">
                <img className="wrapper__vk__border__info__image__photo" src={this.props.photo} alt=""/>
              </div>
              <div className="wrapper__vk__border__info__id">ID страницы: {this.props.id}</div>
              <div className="wrapper__vk__border__info__firstName">Имя: {this.props.firstName}</div>
              <div className="wrapper__vk__border__info__lastName">Фамилия: {this.props.lastName}</div>
              <div className="wrapper__vk__border__info__date">Дата рождения: {messageDate}</div>
              <div className="wrapper__vk__border__info__sex">Пол: {messageSex}</div>
            </div>
          }
          <div className="wrapper__vk__border__error">{this.props.error}</div>
        </div>
      )
    }
}

export default UserVkRender
