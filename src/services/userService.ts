import { client } from "./client"

const userService = {
    async CREATE_USER(user: any) {
        return client.post('/createuser', user)
    },
    async UPDATE_USER(id: string, user: any) {
        return client.put(`/user/${id}`, user)
    },
    async GET_ALL_USERS() {
        return client.get('/getallusers')
            .then(res => res.data).catch(err => console.error(err, 'couldnt fetch resource'))
    },
    async CHECK_IF_USER_EXISTS(mail:string){
        return client.get(`/userexists/${mail}`)
        .then(res=>res.data).catch(err=>console.error(err))
    },
    async GET_USER_WITH_USERNAME(username: string) {
        return client.get(`/${username}`)
            .then(res => res.data).catch(err => console.error(err))
    },
    async UPDATE_PROJECTS(id: Number, projects: any) {
        return client.post(`/projects/${id}`, projects)
            .then(res => res.data).catch(err => console.error(err))
    },
    async UPDATE_USERNAME(email: string, username: string) {
        return client.post(`getusername/${email}`, username)
            .then(res => res.data).catch(err => console.error(err))
    },
    async UPDATE_EDUCATION(id: Number, education: any) {
        return client.post(`education/${id}`, education)
            .then(res => res.data).catch(err => console.error(err))
    },
    async UPDATE_USER_WORKEXPERIENCE(id: Number, workexperience: any) {
        return client.post(`work/${id}`, workexperience)
            .then(res => res.data).catch(err => console.error(err))
    },
    async UPDATE_USER_VOLUNTEER_EXPERIENCE(id: Number, volunteer: any) {
        return client.post(`volunteer/${id}`, volunteer)
            .then(res => res.data).catch(err => console.error(err))
    },
    async UPDATE_USER_AWARD(id: Number, award: any) {
        return client.post(`award/${id}`, award)
            .then(res => res.data).catch(err => console.error(err))
    },
    async GET_ONE_USER(id: string) {
        return client.get(`/users/${id}`)
    }
}

export default userService