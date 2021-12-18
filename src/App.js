import DefaultTemplate from './components/templates/Default'
import { ReactComponent as Logo } from './assets/logo.svg'
import Card from './components/elements/Card'
import CardList from './components/elements/CardList'
import Icon from './components/elements/Icon'
import Button from './components/elements/Button'

const CautionIcon = () => (
  <Icon width={2.4} height={2.4} name={'caution'} fill={'var(--white)'} />
)

const ExtraIcon = () => (
  <Icon width={1.9} height={1.9} name={'more'} fill={'var(--grey)'} />
)

const App = () => {
  return (
    <DefaultTemplate>
      <Logo width={'9.5rem'} height={'4rem'} />
      <div>
        <Button>Open modal</Button>
        <Button icon={'delete'} variant={'secondary'}>
          Button
        </Button>
        <Button variant={'ghost'}>Button</Button>
        <Button variant={'ghost'} icon={'close'} shape={'square'}>
          Button
        </Button>
      </div>
      <CardList>
        <Card
          accentColor={'red'}
          title={'Data at risk'}
          icon={<CautionIcon />}
          extra={<ExtraIcon />}
          footer={<Button>Open modal</Button>}
        >
          1
        </Card>
        <Card
          title={'Data at risk'}
          accentColor={'var(--black)'}
          icon={<CautionIcon />}
          extra={<ExtraIcon />}
          footer={<Button>Open modal</Button>}
        >
          1
        </Card>
        <Card
          title={'Data at risk'}
          accentColor={'var(--black)'}
          icon={<CautionIcon />}
          footer={<Button>Open modal</Button>}
        >
          1
        </Card>
        <Card
          title={'Data at risk'}
          accentColor={'var(--black)'}
          extra={<ExtraIcon />}
        >
          1
        </Card>
        <Card title={'Data at risk'} accentColor={'var(--black)'}>
          1
        </Card>
        <Card>1</Card>
      </CardList>
    </DefaultTemplate>
  )
}

export default App
