import { Box, Image, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { UserCard } from '../organisms/user/UserCard'

export const UserManagement: FC = memo(() => {
  return (
    <Wrap p={{base: 4, md:10}}>
      <WrapItem>
        <UserCard imageUrl='https://www.livefreely2310.com/my-family/wp-content/uploads/2023/04/%E7%B5%90%E5%A9%9A%E5%BC%8F.jpg' userName='静' fullName='Shizuka Iwasaki' />
      </WrapItem>
    </Wrap>
  )
})
