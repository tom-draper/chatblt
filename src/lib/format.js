
export function formatRecipe(recipe) {
    if (recipe.startsWith('```')) {
        recipe = recipe.split('\n').slice(1, -1).join('\n');
    }
    return recipe
}