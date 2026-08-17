const agentImage = "https://randomuser.me/api/portraits/women/44.jpg";

const agents = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  name: "Rachel Dan",
  license: "090-0348-8346",
  phone: "(559) 392-5009",
  email: "agency06@gmail.com",
  address: "Chicago, Los Angeles",
  image: agentImage,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur, non venenatis elit blandit. Mauris vehicula, libero a iaculis fringilla, ipsum ipsum tincidunt velit, ut convallis velit ante tincidunt dui.",
}));

export default agents;
