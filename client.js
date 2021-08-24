console.log('JS');

let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];

for(let penguin of penguins) {
    console.log(penguin);
}

const FEET_IN_METERS = 3.28084;
/**
 * Loop over all penguins and add a property of colorful. If more
 * than 2 colors, it will be true, otherwise false.
 * 
 * @param {array} input The array of objects that have colors.
 * 
    input:
    [{
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    }]
    // Assume that size is currently in meters
    output:
    [{
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true,
        isColorful: true
    }]
 */
function addColorfulProperty(input) {
    for(let item of input) {
        console.log(`
            ${item.name}: number of colors ${item.colors.length}
        `);
        if (item.colors.length > 2) {
            item.isColorful = true;
        } else {
            item.isColorful = false;
        }
        // Shortcut
        // item.isColorful = item.colors.length > 2;// ???

        // Add a property that includes the size (meters) in sizeInFeet
        item.sizeInFeet = item.size * FEET_IN_METERS; // still within loop
        // alternate approach
        // item.size = {
        //     feet: item.size * FEET_IN_METERS,
        //     meters: item.size,
        // }
    }
}
// Any changes to an array or object passed into a function as
// an argument, will change that array or object in the global
// scope.
addColorfulProperty(penguins);
console.table(penguins);