class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        indrediens,
        steps,
        isGlutenFree,
        isVegan,
        isVegetaria,
        isLactoseFree
    ){
        this.id = id,
        this.categoryIds = categoryIds,
        this.title = title,
        this.affordability = affordability,
        this.complexity = complexity,
        this.imageUrl = imageUrl,
        this.duration = duration,
        this.indrediens = indrediens,
        this.steps = steps,
        this.isGlutenFree = isGlutenFree,
        this.isVegan = isVegan,
        this.isVegetaria =  isVegetaria,
        this.isLactoseFree = isLactoseFree
    }
}
export default Meal;