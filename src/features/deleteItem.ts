export function deleteItem(name: string,setItems:React.Dispatch<React.SetStateAction<IProduct[]>>){
    let items = JSON.parse(localStorage.getItem("briefcase")!);
    if (items) {
      items = items.filter((item: IProduct) => item.name !== name);
      setItems(items);
      localStorage.setItem("briefcase", JSON.stringify(items));
      window.location.reload();
    }
  };
