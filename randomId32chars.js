const generateRandomIdOf32Chars = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, a => {
        const b = 0 | 16 * parseFloat(`0.${(Math.random()+"").replace("0.","")}${new Date().getTime()}`),
            c = "x" === a ? b : 8 | 3 & b;
        return c.toString(16)
    });
}