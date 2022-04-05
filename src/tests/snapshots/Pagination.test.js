import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../../components/Content/components/Pagination/Pagination';

const userInfo = [
  {
    id: 295691757,
    node_id: 'MDEwOlJlcG9zaXRvcnkyOTU2OTE3NTc=',
    name: 'basic-js',
    full_name: 'andrei-roh/basic-js',
    private: false,
    owner: {
      login: 'andrei-roh',
      id: 65450338,
      node_id: 'MDQ6VXNlcjY1NDUwMzM4',
      avatar_url: 'https://avatars.githubusercontent.com/u/65450338?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/andrei-roh',
      html_url: 'https://github.com/andrei-roh',
      followers_url: 'https://api.github.com/users/andrei-roh/followers',
      following_url:
        'https://api.github.com/users/andrei-roh/following{/other_user}',
      gists_url: 'https://api.github.com/users/andrei-roh/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/andrei-roh/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/andrei-roh/subscriptions',
      organizations_url: 'https://api.github.com/users/andrei-roh/orgs',
      repos_url: 'https://api.github.com/users/andrei-roh/repos',
      events_url: 'https://api.github.com/users/andrei-roh/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/andrei-roh/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/andrei-roh/basic-js',
    description: 'Basic JavaScript tasks for RSSchool',
    fork: true,
    url: 'https://api.github.com/repos/andrei-roh/basic-js',
    forks_url: 'https://api.github.com/repos/andrei-roh/basic-js/forks',
    keys_url: 'https://api.github.com/repos/andrei-roh/basic-js/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/andrei-roh/basic-js/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/andrei-roh/basic-js/teams',
    hooks_url: 'https://api.github.com/repos/andrei-roh/basic-js/hooks',
    issue_events_url:
      'https://api.github.com/repos/andrei-roh/basic-js/issues/events{/number}',
    events_url: 'https://api.github.com/repos/andrei-roh/basic-js/events',
    assignees_url:
      'https://api.github.com/repos/andrei-roh/basic-js/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/andrei-roh/basic-js/branches{/branch}',
    tags_url: 'https://api.github.com/repos/andrei-roh/basic-js/tags',
    blobs_url:
      'https://api.github.com/repos/andrei-roh/basic-js/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/andrei-roh/basic-js/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/andrei-roh/basic-js/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/andrei-roh/basic-js/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/andrei-roh/basic-js/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/andrei-roh/basic-js/languages',
    stargazers_url:
      'https://api.github.com/repos/andrei-roh/basic-js/stargazers',
    contributors_url:
      'https://api.github.com/repos/andrei-roh/basic-js/contributors',
    subscribers_url:
      'https://api.github.com/repos/andrei-roh/basic-js/subscribers',
    subscription_url:
      'https://api.github.com/repos/andrei-roh/basic-js/subscription',
    commits_url:
      'https://api.github.com/repos/andrei-roh/basic-js/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/andrei-roh/basic-js/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/andrei-roh/basic-js/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/andrei-roh/basic-js/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/andrei-roh/basic-js/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/andrei-roh/basic-js/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/andrei-roh/basic-js/merges',
    archive_url:
      'https://api.github.com/repos/andrei-roh/basic-js/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/andrei-roh/basic-js/downloads',
    issues_url:
      'https://api.github.com/repos/andrei-roh/basic-js/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/andrei-roh/basic-js/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/andrei-roh/basic-js/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/andrei-roh/basic-js/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/andrei-roh/basic-js/labels{/name}',
    releases_url:
      'https://api.github.com/repos/andrei-roh/basic-js/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/andrei-roh/basic-js/deployments',
    created_at: '2020-09-15T10:24:44Z',
    updated_at: '2021-07-01T17:01:03Z',
    pushed_at: '2020-10-08T06:31:55Z',
    git_url: 'git://github.com/andrei-roh/basic-js.git',
    ssh_url: 'git@github.com:andrei-roh/basic-js.git',
    clone_url: 'https://github.com/andrei-roh/basic-js.git',
    svn_url: 'https://github.com/andrei-roh/basic-js',
    homepage: '',
    size: 185,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
];

describe('<Pagination />', () => {
  const initialProps = {
    userRepositoryInfo: userInfo,
  };
  const pagination = shallow(<Pagination {...initialProps} />);
  it('should match the snapshot', () => {
    expect(pagination.html()).toMatchSnapshot();
  });
});
