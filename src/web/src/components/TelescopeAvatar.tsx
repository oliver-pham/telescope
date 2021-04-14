import { Avatar } from '@material-ui/core';

type TelescopeAvatarProps = {
  name: string;
  size: string;
  img?: string;
  blog?: string;
};

const getInitials = (name: string) => {
  const initials = name
    .split(' ')
    .map((splitName: string, i: number, arr: string[]) =>
      i === 0 || i + 1 === arr.length ? splitName[0].toUpperCase() : null
    )
    .join('');
  // splitName represents the current value, i represents its index, and arr represent the whole splitted name-word array
  // if the index is 0, means it's the first word in the name
  // if the index+1 equals to the array length, it means the current value is the last word in the name
  // anything rather than first word or last word will not be included in initials
  return initials;
};

const TelescopeAvatar = ({ name, img, size, blog }: TelescopeAvatarProps) => {
  const initials = getInitials(name);

  return (
    <a
      href={blog}
      style={{
        textDecoration: 'none',
      }}
    >
      <Avatar
        alt={name}
        src={img}
        style={{
          width: size,
          height: size,
          fontSize: `calc(${size} * 0.43)`,
          backgroundColor: '#A0D1FB',
          color: '#000',
        }}
      >
        {initials}
      </Avatar>
    </a>
  );
};

export default TelescopeAvatar;