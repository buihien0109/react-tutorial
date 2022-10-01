export const formatMoney = (number) => {
    return number.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });
};

export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
