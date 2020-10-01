import React, { FC } from "react"
import * as SC from "./styles"

interface IPageNavigationPage {
  relativePath: string
  title: string
}

interface IPageContentProps {
  next?: IPageNavigationPage
  previous?: IPageNavigationPage
}

export const PageNavigation: FC<IPageContentProps> = ({ previous, next }) => {
  return (
    <SC.PageNavigationWrapper>
      {previous ? (
        <SC.PageContent>
          <SC.Text>Previous</SC.Text>
          <SC.NavLink to={`/resources/${previous.relativePath}`}>
            <SC.PreviousArrow />
            <SC.PageTitle>
              {previous.title}
            </SC.PageTitle>
          </SC.NavLink>
        </SC.PageContent>
      ) : (
        <div> </div>
      )}
      {next ? (
        <SC.PageContent>
          <SC.Text>Next</SC.Text>
          <SC.NavLink to={`/resources/${next.relativePath}`}>
            <SC.PageTitle>
              {next.title}
            </SC.PageTitle>
            <SC.NextArrow />
          </SC.NavLink>
        </SC.PageContent>
      ) : (
        <div> </div>
      )}
    </SC.PageNavigationWrapper>
  )
}
