import ListIcon from './ListIcon';

const ListItem = ({ content }: { content: string }) => {
  return (
    <div className="flex gap-4 items-center ">
      <ListIcon />
      <span>{content}</span>
    </div>
  );
};
export default ListItem;
