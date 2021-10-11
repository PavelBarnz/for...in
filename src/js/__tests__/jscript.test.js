import sortByProp from "../script.js";

const swordsMan = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40,
}

const bowerMan = {
    defence: 40,
    attack: 80,
    health: 10, 
    name: 'лучник', 
    level: 2,
}

test.each([
    [
        swordsMan, ["name", "level", "defence"], [
            { key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "defence", value: 40 },
            { key: "attack", value: 80 },
            { key: "health", value: 10 },
        ]
    ],
    [
        bowerMan, ["defence", "level"], [
            { key: "defence", value: 40 },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "health", value: 10 },
            { key: "name", value: "лучник" },
        ]    
    ]
])(
    ("Тест функции sortByProp"), 
    (obj, prop, expected) => {
    const result = sortByProp(obj, prop)
    expect(result).toEqual(expected);
})