export const calculateValueHandler = (args) => {

    const message = `What do we have... DIAMOND HANDS`;
    const totalValue = Math.ceil(args.argv.v * args.argv.h)
    const valueMessage = `${totalValue}$`;
    
    const output = {
        message,
        valueMessage
    }

    console.log(output)
}