## vNext (TBD)

### Enhancements
* Added a [contribution guide](https://github.com/realm/realm-js/blob/master/packages/realm-react/CONTRIBUTING.md) to assist in contributions from the community.

### Fixed
* <How to hit and notice issue? what was the impact?> ([#????](https://github.com/realm/realm-js/issues/????), since v?.?.?)
* None

### Compatibility
* React Native >= v0.64.0
* Atlas App Services.
* Realm Studio v12.0.0.
* APIs are backwards compatible with all previous releases of Realm JavaScript in the 10.5.x series.
* File format: generates Realms with format v22 (reads and upgrades file format v5 or later for non-synced Realm, upgrades file format v10 or later for synced Realms).

### Internal
* Update devDependencies for testing:
  * react v18.1.0
  * react-native v0.70.1
	* react-test-renderer v18.1.0
	* @testing-library/react-native v11.2.0
	* @testing-library/jest-native v4.0.13
* Refactor tests to use updated `testing-library`
## 0.3.2 (2022-07-14)
### Fixed
* Fix peer dependency for Realm in package.json to support `-rc` branches of Realm ([#4621](https://github.com/realm/realm-js/issues/4621))
* Add generic type parameters to `@realm/react` hooks ([#4716](https://github.com/realm/realm-js/pull/4716))

## 0.3.1 (2022-05-31)

### Enhancements
* Add realmRef property to `RealmProvider` to access the configured realm outside of the provider component ([#4571](https://github.com/realm/realm-js/issues/4571))
  * Additionally appRef on `AppProvider` was added to provide access to `Realm.App` from outside the provider component

### Fixed
* Results from `useQuery` could not be passed to `MutableSubscriptionSet.add`/`remove` ([#4507](https://github.com/realm/realm-js/issues/4507), since v0.1.0)

## 0.3.0 (2022-05-11)

### Enhancements

- Add UserProvider and useUser hook ([#4557](https://github.com/realm/realm-js/pull/4557)). Usage example:

```
import {AppProvider, UserProvider} from '@realm/react'
//...
// Wrap your RealmProvider with the AppProvider and provide an appId
<AppProvider id={appId}>
	<UserProvider fallback={LoginComponent}>
		{/* After login, user will be automatically populated in realm configuration */}
		<RealmProvider sync={{flexible: true}}>
		//...
		</RealmProvider>
	</UserProvider>
</AppProvider>

// Access the app instance using the useApp hook
import {useUser} from '@realm/react'

const SomeComponent = () => {
	const user = useUser()

	//...
}
```

- Add AppProvider and useApp hook ([#4470](https://github.com/realm/realm-js/pull/4470)). Usage example:

```
import {AppProvider} from '@realm/react'
//...
// Wrap your RealmProvider with the AppProvider and provide an appId
<AppProvider id={appId}>
	<RealmProvider sync={{user, flexible: true}}>
	//...
	</RealmProvider>
</AppProvider>

// Access the app instance using the useApp hook
import {useApp} from '@realm/react'

const SomeComponent = () => {
	const app = useApp()

	//...
}
```

### Fixed

- Implicit children [was removed from `React.FC`](https://solverfox.dev/writing/no-implicit-children/). Children has now been explicitly added to provider props. ([#4565](https://github.com/realm/realm-js/issues/4565))
- Fixed potential "Cannot create asynchronous query while in a write transaction" error with `useObject` due to adding event listeners while in a write transaction ([#4375](https://github.com/realm/realm-js/issues/4375), since v0.1.0)

### Compatibility

- None.

### Internal

- Tests run with `--forceExit` to prevent them hanging ([#4531](https://github.com/realm/realm-js/pull/4531))

## 0.2.1 (2022-03-24)

### Enhancements

- Allow `createRealmContext` to be called without an initial configuration
- Add a `fallback` property to `RealmProvider` that is shown while realm is opening

### Fixed

- Fixed bug when trying to access a collection result with an out of bounds index.([#4416](https://github.com/realm/realm-js/pull/4416), since v0.2.0)

### Compatibility

- None

### Internal

- None

## 0.2.0 (2022-03-07)

### Enhancements

- Add ability to import `Realm` directly from `@realm/react`
- Add cachedObject and cachedCollection
  - Ensures that React.Memo that have Realm.Object/Collection as a property only rerender on actual changes
  - Increased compatability with VirtualizedList/FlatList
- Added more comprehensive documentation in the source code
- List properties of a Realm.Object now rerender on change
- Broadened test coverage for collections, lists and linked objects

## 0.1.0 (2021-11-10)

### Enhancements

- Initial release
