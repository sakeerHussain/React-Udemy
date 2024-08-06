
export default function TabButton({ children, onSelect }) {
    console.log("TabButton component are executing!");

    return (
      <li>
        <button onClick={onSelect}>{children}</button>
      </li>
    );
}