
export default function TabButton({ children, isSelected, ...props }) {
    console.log("TabButton component are executing!");

    return (
      <li>
        <button className= {isSelected ? 'active' : undefined} {...props}>{children}</button>
      </li>
    );
}


// This is a dummy text helll oo kjhedhjkghkj