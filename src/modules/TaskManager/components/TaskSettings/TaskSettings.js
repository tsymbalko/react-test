import PropTypes from 'prop-types'

import { Button, Checkbox, List, Modal, Paragraph } from 'components/elements'

import { mockTaskSetting } from 'utils'

const TaskSettings = ({ isVisible, onClose }) => {
  const changeSettingsHandle = (event) => {
    const { name, checked } = event.target
    console.log({ [name]: checked })
  }

  return (
    <Modal
      visible={isVisible}
      title="Lorem ipsum dolor sit amet"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={onClose}>
            accept
          </Button>
        </>
      }
    >
      <Paragraph mb="1.6rem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
        cursus nibh, sit amet varius purus lacinia at. Quisque tincidunt
        efficitur tempor. Proin pellentesque dictum mauris sed lobortis. Etiam
        nec mollis elit. Fusce et lacus tincidunt sem commodo condimentum et id
        lectus.
      </Paragraph>
      <Paragraph mb="1.6rem">
        Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
        dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante
        rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus
        neque, ac ornare libero tempor placerat.
      </Paragraph>
      <List mt="1.6rem" mb="1.6rem" flexDirection="column">
        {mockTaskSetting.slice(0, 3).map(({ name, label, value }) => (
          <List.Item key={name}>
            <Checkbox
              label={label}
              name={name}
              onChange={changeSettingsHandle}
            />
          </List.Item>
        ))}
      </List>
      <Paragraph mb="0.8rem" fontSize="1rem">
        Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
        dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante
        rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus
        neque, ac ornare libero tempor placerat.
      </Paragraph>
      <Paragraph mb="0.8rem" fontSize="1rem">
        Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
        dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante
        rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus
        neque, ac ornare libero tempor placerat.
      </Paragraph>
      <List mt="0.8rem" mb="0.8rem" flexDirection="row">
        {mockTaskSetting.slice(3, 6).map(({ name, label, value }) => (
          <List.Item key={name}>
            <Checkbox
              label={label}
              name={name}
              onChange={changeSettingsHandle}
            />
          </List.Item>
        ))}
      </List>
    </Modal>
  )
}

TaskSettings.propTypes = {
  isVisible: PropTypes.bool,
  onClose: PropTypes.func
}

export { TaskSettings }
