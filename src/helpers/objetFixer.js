export const objectFixer = input => {
    const keys = Object.keys(input);
    const output = {};
    keys.forEach(item => {
        if(input[item]){
            output[item] = input[item];
        }
    })
    return output;
}