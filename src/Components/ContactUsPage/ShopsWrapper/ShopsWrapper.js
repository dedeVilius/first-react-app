import ShopItem from "../ShopItem/ShopItem";

function ShopsWrapper() {
  const shopsData = [
    {
      title: "Parduotuve 1",
      phone: "+370456453131",
      email: "info2@parduotuve.lt",
      address: "Vilniaus g. 20, Vilnius",
      addressLink: "/#",
    },
    {
      title: "Parduotuve 2",
      email: "info2@parduotuve.lt",
    },
    {
      title:"Parduotuve 3",
      phone:"+370456555555",
      email:"info3@parduotuve.lt",
      address:"Vilniaus g. 21, Vilnius",
    },
    {
      title: "Parduotuve 4",
      phone: "+370456666666",
      email: "info4@parduotuve.lt",
      addressLink: "/#",
    }
  ];

  const shopListElements = shopsData.map((shop, index) => <ShopItem key={index} data={shop} />);

return (
  <div className="wrapper">
    {shopListElements}
  </div>
)
}

export default ShopsWrapper;