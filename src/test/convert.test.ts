import expect = require("expect");

const json = {
    id: 123,
    numberCol: 1.23,
    stringCol: "Hello world",
    booleanCol: true,
    arrayCol: [
        "hello",
        "world"
    ]
}
const json2 = {
    id: 234,
    numberCol: 2.34,
    stringCol: "Hello two",
    booleanCol: false,
    arrayCol: [
        "you",
        "two"
    ]
}

const container = {
    someStuff: [
        json,
        json2
    ]
}
describe('test me', () => {
    it('should do something', () => {
        expect(1).toBe(1)
    })
})