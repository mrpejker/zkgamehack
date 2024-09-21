const generateMoles = (): boolean[] => {
    const moles: boolean[] = new Array(9).fill(false);
    const randomIndex = Math.floor(Math.random() * 9);
    moles[randomIndex] = true;
    return moles;
  };
  
  export default generateMoles;