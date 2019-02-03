const plants = [
    { id: 1, name: 'Scott Bonnet', plantDate: new Date(), germMethod: 'Paper Towel' },
    { id: 2, name: 'Jalepeno', plantDate: new Date(), germMethod: 'Paper Towel' },
    { id: 3, name: 'Habenero', plantDate: new Date(), germMethod: 'Paper Towel' }
];

exports.getPlants() = () => {
    return JSON.parse(JSON.stringify(plants));
}

exports.addPlant = (name, plantDate, germMethod) => {
    plants.push({
        id: PageTransitionEvent.length + 1, name, plantDate, germMethod,
    });
}