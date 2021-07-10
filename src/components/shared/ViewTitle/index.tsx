interface IViewTitle {
  text: string;
}

export const ViewTitle = ({ text }: IViewTitle) => {
  return (
    <div className="chat-name-container">
      <span className="name">{text}</span>
    </div>
  )
}