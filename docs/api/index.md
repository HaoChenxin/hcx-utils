---
nav:
  title: API
  order: 1
group:
  title: 缓存管理
  order: -1
demo:
  cols: 2
---

# Cache


## 功能
- 支持缓存设置任意类型的值 *boolean* *array* *object* *string* *null* 等
- 支持设置缓存超时时长，以 *秒* 为单位
- 支持缓存加密 `AES`, 默认开发环境关闭
- 支持删除某些 *keys* 以外的其余缓存
- 支持删除该系统除了某些 *keys* 以外的其余缓存，基于`prefixKey`
- 支持删除该系统管理缓存
- 支持删除该系统管理缓存，基于`prefixKey`
- 支持一键删除全部缓存(`localStroage` 和 `sesstionStorage`)
- 支持一键删除该系统全部缓存，基于`prefixKey`(`localStroage` 和 `sesstionStorage`)
- 支持分开删除全部缓存

## 代码演示
<code src="../../example/cache/index.tsx"></code>

## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------ | ------ | ------ | ------ | ------ |
| createStorage | 创建缓存管理 | (Stroage, [Ops](#ops)) => [object](#object) | - | 0.0.1 |
| createSessionStorage | 创建localStroage缓存管理 | ([Ops](#ops)) => [object](#object) | - | 0.0.1 |
| createLocalStorage | 创建sessionStroage缓存管理 | ([Ops](#ops)) => [object](#object) | - | 0.0.1 |

### Ops
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------ | ------ | ------ | ------ | ------ |
| prefixKey | 前缀 | string | '' | 0.0.1 |
| storage | 缓存类型 | Stroage | - | 0.0.1 |
| hasEncrypt | 是否加密 | boolean | true | 0.0.1 |
| timeout | 超时时长，单位：s(秒) | number | null | 0.0.1 |

### object
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :------ | ------ | ------ | ------ | ------ |
| set | 设置缓存 | .(string, any) | - | 0.0.1 |
| get | 读取缓存 | .(string) | - | 0.0.1 |
| remove | 删除单个缓存 | .(string) | - | 0.0.1 |
| removeExceptKey | 跳过选定项，清除其余缓存 | .(string[]) | - | 0.0.1 |
| clear | 清除缓存 | .() | - | 0.0.1 |
| clearAll | 清除localStorage *全部* 缓存 | .() | - | 0.0.1 |
| cacheSet | 设置localStorage和sessionStorage缓存 | .(string, any) | - | 0.0.1 |
| cacheRemove | 清除localStorage和sessionStorage中缓存 | .(string) | - | 0.0.1 |
| cacheRemoveExceptKey | 清除localStorage和sessionStorage中，除了指定项以外的其余 *全部* 缓存 | .(string[]) | - | 0.0.1 |
| cacheClear | 清除localStorage和sessionStorage 中 *全部* 缓存 | .() | - | 0.0.1 |
| cacheClearAll | 清除localStorage和sessionStorage *全部* 缓存 | .() | - | 0.0.1 |
