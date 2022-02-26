import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightBulbIcon, SearchCircleIcon, UserIcon } from "@heroicons/react/outline"

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightBulbIcon} />
                <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="Collection" Icon={CollectionIcon} />
                <HeaderItem title="Search" Icon={SearchCircleIcon} />
                <HeaderItem title="Account" Icon={UserIcon} />
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6"
                width={200} height={100} alt="logo" />
        </header>

    );
};

export default Header;