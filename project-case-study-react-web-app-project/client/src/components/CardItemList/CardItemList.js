import React from 'react';
import Card from '../Card';


const CardItemList = (props) => {
    return (
        <div className="container__carditemlist">
        {props.items.map(item => (
          <Card
            key={item.id}
            link={item.html_url}
            title={item.full_name}
            description={item.description}
            image={item.owner.avatar_url}
            forks={item.forks_count}
            stars={item.stargazers_count}
            updatedAt={item.updated_at}
            watchCount={item.watchers_count}
            openIssuesCount={item.open_issues_count}
            repoSize={item.size}
          />
        ))}
        </div>
    )
}

export default CardItemList;
