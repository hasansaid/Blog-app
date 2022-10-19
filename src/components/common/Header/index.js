import {useState} from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import logo from '../../../static/images/logo4.png';
import {Rocket} from 'tabler-icons-react';
import Language from '../../../languages';
import db from '@yusuf-yeniceri/easy-storage';
import './styles.css';

const HEADER_HEIGHT = 60;

const useStyles = createStyles (theme => ({
  root: {
    position: 'relative',
    zIndex: 100,
    backgroundColor: 'transparent',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan ('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  links: {
    [theme.fn.smallerThan ('sm')]: {
      display: 'none',
    },
    marginRight: '40px',
  },

  burger: {
    [theme.fn.largerThan ('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.variant ({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant ({variant: 'light', color: theme.primaryColor})
        .color,
    },

    [theme.fn.smallerThan ('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant ({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant ({variant: 'light', color: theme.primaryColor})
        .color,
    },
  },
}));

const HeaderResponsive = ({links}) => {
  const [opened, {toggle, close}] = useDisclosure (false);
  const [active, setActive] = useState (links[0].link);
  const {classes, cx} = useStyles ();

  const items = links.map (link => (
    <a
      key={link.label}
      href={link.link}
      className={cx (classes.link, {})}
      onClick={event => {
        event.preventDefault ();
        close ();
        window.location = link.link;
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={10} className={classes.root}>

      <div className={classes.header}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '30px',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.location = '/';
          }}
        >
          <Rocket size={40} strokeWidth={2} color={'#40a5bf'} />
          <span
            style={{
              fontFamily: 'Fuzzy Bubbles',
              color: '#40a5bf',
              fontSize: '1.5em',
            }}
          >
            Blog App
          </span>
        </div>
        <Group spacing={5} className={classes.links}>
          {items}
          <div
            className="language"
            onClick={() => {
              let currentLang = db.ref ('lang').get ();
              if (currentLang == 'english') {
                db.ref ('lang').set ('turkish');
              } else if (currentLang == 'turkish') {
                db.ref ('lang').set ('english');
              }

              window.location = '/';
            }}
          >
            {Language.navigation.lang}
          </div>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {styles => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </div>
    </Header>
  );
};

export default HeaderResponsive;
