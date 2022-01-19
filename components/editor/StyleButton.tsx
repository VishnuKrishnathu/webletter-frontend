export default function StyleButton (props: {
    key :string;
    style :string;
    active :boolean;
    label :string;
    onToggle : (a :string) => void;
}){

    function onToggle (e : React.MouseEvent){
        e.preventDefault();
        props.onToggle(props.style);
    };

    if (props.active){
      return (
        <span className={`cursor-pointer m-2 p-2 rounded bg-indigo-900`} onMouseDown={onToggle}>
          {props.label}
        </span>
      )
    }


    return (
      <span className={`cursor-pointer mx-2 p-2 rounded hover:border-2 hover:border-indigo-400`} onMouseDown={onToggle}>
        {props.label}
      </span>
    );
}