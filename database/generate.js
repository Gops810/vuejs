module.exports = function() {
    var faker = require("faker")
    var _ = require("lodash")


    return {
        people: _.times(100, function(n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }
        }),
        dodo: _.times(10, function(n) {
            return {
                id: n + 1,
                name: faker.name.findName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }
        })
    }
}