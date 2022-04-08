import React, { useState } from 'react'
import { RequestRepositoriesUsers } from '../../Services/request'
import * as S from './style'


const MainPage: React.FC = () => {

    const [repo, setRepo] = useState<{ [key: string]: any }[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const HandleClick = () => {

        if (repo.length === 0 && !error) {

            RequestRepositoriesUsers(searchValue)
                .then((response: { [key: string]: any }[] | string) => {
                    if (response === 'error') {
                        setError(true)
                        return
                    }
                    if (typeof response !== 'string') {
                        setRepo(response)
                    }
                })
            return
        }

        setError(false)
        setSearchValue('')
        setRepo([])

    }
    console.log(repo)
    return (
        <S.Container>
            <S.Title>{repo.length > 0 ? `Repository List from "${repo[0].owner.login}"` : 'Search your GitHub Account'}</S.Title>
            <S.Content>
                {repo.length === 0 && !error &&
                    <S.Label>
                        Username:
                        <S.InputContainer>
                            <S.Input placeholder='write a username...'
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                        </S.InputContainer>
                    </S.Label>
                }
                <S.Button onClick={() => searchValue !== '' && HandleClick()}>
                    {repo.length === 0 && !error ? 'Search' : 'reset'}
                </S.Button>
            </S.Content>
            {error &&
                <span>ERROR</span>
            }
            <S.ResponseContainer>
                {repo.map((element, index) => {
                    return (
                        <S.Card key={index}>
                            <S.CardItem>Name: {element.name}</S.CardItem>
                            <S.CardItem>Forks: {element.forks}</S.CardItem>
                            <S.CardItem>Language : {element.language}</S.CardItem>
                            <S.CardItem>link: <a href={element.html_url} target='_blank' >click here!</a></S.CardItem>
                            
                        </S.Card>
                    )
                })}
            </S.ResponseContainer>
        </S.Container>

    )

}

export default MainPage