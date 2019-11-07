import React from 'react';
import UserInstagramRender from './UserInstagramRender'

const serviceToken = "b37ecad3b37ecad3b37ecad3dfb313440abb37eb37ecad3eed06cec6fe72e9c4e2a1714"


class ImportUserInstagram extends React.Component {
  state = {
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    bdate: undefined,
    photo: undefined,
    sex: undefined,
    error: undefined,
    status: undefined
  }

  gettingUser = async (e) => {
    e.preventDefault()
    const id = e.target.elements.id.value
    if (id) {
      const apiUrl = await fetch(`https://cors-anywhere.herokuapp.com/https://api.vk.com/method/users.get?user_ids=${id}&fields=bdate,photo_100,sex&access_token=${serviceToken}&v=5.102`)
      const data = await apiUrl.json()
      if (data.response) {
        this.setState({
          id: data.response[0].id,
          firstName: data.response[0].first_name,
          lastName: data.response[0].last_name,
          bdate: data.response[0].bdate,
          photo: data.response[0].photo_100,
          sex: data.response[0].sex,
          error: undefined,
          status: undefined
        })
      } else {this.setState({status: "Неверный id", error: undefined})}
    } else { this.setState({
              id: undefined,
              firstName: undefined,
              lastName: undefined,
              bdate: undefined,
              photo: undefined,
              sex: undefined,
              error: "Укажите id",
              status: undefined
            })
    }
  }

  render () {
    return (
      <div className="wrapper__vk">
        <UserInstagramRender userMethod={this.gettingUser} id={this.state.id} firstName={this.state.firstName} lastName={this.state.lastName} bdate={this.state.bdate} photo={this.state.photo} sex={this.state.sex} error={this.state.error} status={this.state.status}/>
      </div>
    )
  }
}

export default ImportUserVk;
