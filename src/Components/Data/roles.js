const userRole = {
    roleName: 'user',
    like: true,
    save: true,
}

const creatorRole = {
    ...userRole,
    roleName: 'creator',
    create: true,
    edit: 'own',
    delete: 'own',
}

const adminRole = {
    ...creatorRole,
    roleName: 'admin',
    edit: 'all',
    delete: 'all',
}

const roles = [userRole, creatorRole, adminRole]
// console.log(roles[0])

// const users = []
// users.push({
//     name: 'user',
//     userName: 'user123',
//     email: '123',
//     role: 'creator',
// })
// users.push({
//     name: 'user',
//     userName: 'user123',
//     email: '123',
//     role: 'user',
// })

//simulate user state
const user1 = {
    name: 'user',
    userName: 'user123',
    email: '123',
    role: 'admin',
}

const permitsVerify = user => {
    const userRole = user.role
    // console.log({ userRole })
    const role = roles.find(role => role.roleName === userRole)
    // console.log({ permits: role })
    return role
    // let canDo = roles[0].roleName
    // return canDo
}

const edit = user => {
    const permits = permitsVerify(user)
    permits.edit ? console.log('editando') : console.log('no tienes permisos')
}

// permitsVerify(user1)
edit(user1)
// console.log(user1)
// console.log(roles)
