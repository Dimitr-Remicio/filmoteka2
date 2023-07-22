import s from './AppBar.module.css'
import Navigation from './Navigation/Navigation';
import Logo from './Logo';

import Dark from '../../additional/arrow/arrows'
import Container from './BarContainer/Container'

export default function AppBar() {
    return(
        <header className={s.header}>
            <div className={s.blur}></div>
            <Container>
            <div className={s.header_content}>
                <Logo link={'/'} />
                <div className={s.navpage}>
                    <Dark/>
                    <Navigation link={'/'} title={'Home'} />
                    <Navigation link={'/movies'} title={'Movies'} />
                </div>
            </div>
            </Container>
        </header>

)

}
