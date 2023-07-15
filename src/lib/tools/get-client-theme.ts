const getClientTheme = async (window: Window): Promise<boolean> => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        return true;

    return false;
};

export default getClientTheme;
