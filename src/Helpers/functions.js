const shorten = (title) => {
    const newTitle = title.split(" ");
    return `${newTitle[0]} ${newTitle[1]}`;
}

const isInCart = (state,id) => {
    const result = !!state.selectedItems.find(item => item.id ===id);
    return result;
}

export {shorten,isInCart}