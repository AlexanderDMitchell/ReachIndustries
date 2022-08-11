import React from 'react'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import styles from './LoginModal.module.css'

interface Props {
  userId: string
  orgId: string
  isVisible: boolean
  toggleIsVisible: () => void
  onConfirm: (draft: { userIdDraft: string; orgIdDraft: string }) => void
}

export const LoginModal = ({
  userId,
  orgId,
  isVisible,
  toggleIsVisible,
  onConfirm
}: Props) => {
  const [userIdDraft, setUserIdDraft] = React.useState(userId)
  const [orgIdDraft, setOrgIdDraft] = React.useState(orgId)

  return (
    <Modal isVisible={isVisible}>
      <div className={styles.formContainer}>
        <p>User Id</p>
        <input
          value={userIdDraft}
          onChange={(event) => setUserIdDraft(event.target.value)}
        />
        <p>Org Id</p>
        <input
          value={orgIdDraft}
          onChange={(event) => setOrgIdDraft(event.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <Button onClick={toggleIsVisible}>Cancel</Button>
        <Button
          onClick={() => {
            onConfirm({ userIdDraft, orgIdDraft })
            toggleIsVisible()
          }}>
          Confirm
        </Button>
      </div>
    </Modal>
  )
}
