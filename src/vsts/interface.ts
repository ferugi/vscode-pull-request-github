// TODO: Carry on adding models from:
// https://docs.microsoft.com/en-us/rest/api/vsts/git/pull%20requests/get%20pull%20request?view=vsts-rest-4.1

export interface ReferenceLinks {
	links: any;
}

export interface IdentityRef {
	_links: ReferenceLinks;
	descriptor: string;
	directoryAlias: string;
	displayName: string;
	id: string;
	imageUrl: string;
	inactive: boolean;
	isAadIdentity: boolean;
	isContainer: boolean;
	profileUrl: string;
	uniqueName: string;
	url: string;
}

export interface GitPullRequest {
	_links: ReferenceLinks;
	artifactId: string;
	autoCompleteSetBy: IdentityRef;
	closedBy: IdentityRef;
	closedDate: string;
	codeReviewId: number;
	commits: GitCommitRef[];
	completionOptions: GitPullRequestCompletionOptions;
	completionQueueTime: string;
	createdBy: IdentityRef;
	creationDate: string;
	description: string;
	forkSource: GitForkRef;
	labels: WebApiTagDefinition[];
	lastMergeCommit: GitCommitRef;
	lastMergeSourceCommit: GitCommitRef;
	lastMergeTargetCommit: GitCommitRef;
	mergeFailureMessage: string;
	mergeFailureType: PullRequestMergeFailureType;
	mergeId: string;
	mergeOptions: GitPullRequestMergeOptions;
	mergeStatus: PullRequestAsyncStatus;
	pullRequestId: number;
	remoteUrl: string;
	repository: GitRepository;
	reviewers: IdentityRefWithVote[];
	sourceRefName: string;
	status: PullRequestStatus;
	supportsIterations: boolean;
	targetRefName: string;
	title: string;
	url: string;
	workItemRefs: ResourceRef[];
}