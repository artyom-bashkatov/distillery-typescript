const backlog = {
  releases: [
    {
      name: "Sprint 1",
      epics: [
        {
          name: "Account Management",
          tasks: [
            { name: "Single Sign On", priority: "high"},
            { name: "Email Notifications", priority: "low"}
          ]
        }
      ]
    }
  ]
}

type Unarray<T> = T extends Array<infer U> ? U : T;

type Release = Unarray<typeof backlog["releases"]>;
type Epic = Unarray<Release['epics']>;

export const epic: Epic = {
  name: "Account Management",
  tasks: [
    { name: "Single Sign On", priority: "high"},
    { name: "Email Notifications", priority: "low"}
  ]
};