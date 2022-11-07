import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '../../../components/Icons';
import SuggestedAccounts from '../../../components/SuggestedAccountItem/SuggestedAccounts';

import config from '../../../config';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" 
                    to={config.routes.home} 
                    icon={<HomeIcon />} 
                    activeIcon={<HomeActiveIcon />} />
                <MenuItem title="LIVE" 
                    to={config.routes.live} 
                    icon={<LiveIcon />} 
                    activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    title="Thư Viện"
                    to={config.routes.library}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Playlist"
                    to={config.routes.playlist}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />

                <MenuItem
                    title="Favorite"
                    to={config.routes.favorite}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <SuggestedAccounts label="Playlist" />
            </Menu>
        </aside>
    );
}

export default Sidebar;