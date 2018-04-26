import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const fakeGroupId = '5ae1d7ba31e9923a08c479bc';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);
    return data.meetups; // This '.meetups' comes from meetup-backend > server > modules > groups > controller.js
  }
}

export { MeetupApi };

/* export const fetchMeetups = () =>
  fetch('http://localhost:3000/api/meetups')
    .then(res => res.json());
*/
