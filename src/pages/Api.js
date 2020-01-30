import axios from 'axios';

const hostUrl = "https://wedevote-nogerm.herokuapp.com";

export const remindGetAll = function() {
    return axios.get(hostUrl + "/routine_remind")
}

export const remindGetOne = function(groupId) {
    return axios.get(hostUrl + "/routine_remind?id=" + groupId)
}

export const remindCreateNewGroup = function() {
    return axios.post(hostUrl + "/routine_remind_group")
}

export const remindDeleteGroup = function(groupId) {
    const data = {
        groupId: groupId
    }
    return axios.delete(hostUrl + "/routine_remind_group", { data: data})
}

export const remindCreateNewMsg = function(groupId, msgObj) {
    const data = {
        groupId: groupId,
        msg: msgObj
    }
    return axios.post(hostUrl + "/routine_remind_msg", data)
}

export const remindUpdateMsg = function(groupId, msgObj) {
    const data = {
        groupId: groupId,
        msg: msgObj
    }
    return axios.put(hostUrl + "/routine_remind_msg", data)
}

export const remindDeleteMsg = function(groupId, msgId) {
    const data = {
        groupId: groupId,
        msgId: msgId
    }
    return axios.delete(hostUrl + "/routine_remind_msg", { data: data})
}

export const remindEnable = function(groupId, enable) {
    const data = {
        groupId: groupId,
        enable: enable
    }
    return axios.put(hostUrl + "/routine_remind_enable", data)
}