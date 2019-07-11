import React from "react"

const SvgComponent = props => (
  <svg width={43} height={222} fill="none" {...props}>
    <path
      d="M33.406 218.656l.469.884.009-.005-.478-.879zm-16.125 0l-.471.882.006.003.465-.885zm-5.718-5.375l-.857.517.003.003.854-.52zm3.656-19.843l.649-.761-.577-.492-.63.422.558.831zm4.687 4l-.649.76.015.013.016.013.618-.786zm.438.343l.768.64.659-.79-.81-.636-.617.786zm-.469.563l.196.98.346-.069.226-.271-.768-.64zm-1.438.312l.394.919.041-.017.04-.021-.474-.881zm-.875.656l-.73-.682-.001.001.732.681zm-.875 10.094l-.823.568.005.007.819-.575zm3.532 2.844l-.422.907.01.004.412-.911zm10.218.062l.415.91.011-.005-.425-.905zm3.5-10.812l-.902.43.002.006.9-.436zm-3.03-3.656l-.654-.757-.907.783.933.752.627-.778zm4.812-4.156l.663-.749-.655-.58-.662.572.654.757zm4.031 5.437l.92-.393-.002-.004-.918.397zm.281 6.344c0 2.755-.637 5.18-1.892 7.304l1.722 1.017c1.454-2.46 2.17-5.243 2.17-8.321h-2zm-1.892 7.304c-1.26 2.133-2.992 3.798-5.21 5.005l.955 1.757c2.531-1.377 4.53-3.295 5.977-5.745l-1.722-1.017zm-5.201 5c-2.238 1.187-4.762 1.789-7.594 1.789v2c3.126 0 5.977-.668 8.53-2.022l-.936-1.767zm-7.594 1.789c-2.81 0-5.336-.602-7.597-1.791l-.931 1.77c2.572 1.353 5.421 2.021 8.528 2.021v-2zm-7.591-1.788c-2.263-1.209-4.036-2.877-5.337-5.013l-1.707 1.04c1.49 2.448 3.53 4.363 6.1 5.737l.944-1.764zm-5.334-5.01c-1.294-2.143-1.95-4.586-1.95-7.358h-2c0 3.103.74 5.91 2.237 8.392l1.713-1.034zm-1.95-7.358c0-2.318.47-4.475 1.406-6.484l-1.813-.844c-1.064 2.283-1.593 4.73-1.593 7.328h2zm1.406-6.484c.929-1.992 2.23-3.534 3.9-4.654l-1.113-1.661c-1.996 1.338-3.528 3.172-4.6 5.471l1.813.844zm2.695-4.724l4.687 4 1.298-1.521-4.687-4-1.298 1.521zm4.718 4.026l.438.344 1.236-1.573-.438-.344-1.236 1.573zm.288-1.083l-.47.563 1.537 1.28.469-.563-1.536-1.28zm.103.222l-.036.006-.1.011a9.724 9.724 0 0 1-.333.029l.142 1.995c.286-.021.544-.045.72-.08l-.393-1.961zm-.469.046c-.44.031-.858.157-1.247.367l.949 1.761c.152-.083.297-.123.44-.133l-.142-1.995zm-1.166.328c-.456.195-.857.512-1.213.893l1.463 1.365c.228-.244.41-.365.537-.42l-.787-1.838zm-1.213.894c-1.626 1.745-2.393 4.04-2.393 6.775h2c0-2.348.649-4.115 1.856-5.412l-1.463-1.363zm-2.393 6.775c0 1.663.479 3.194 1.426 4.568l1.647-1.135a5.896 5.896 0 0 1-1.073-3.433h-2zm1.43 4.575c.95 1.352 2.274 2.405 3.929 3.176l.844-1.814c-1.387-.646-2.417-1.488-3.135-2.511l-1.637 1.149zm3.939 3.18c1.672.756 3.567 1.12 5.662 1.12v-2c-1.863 0-3.469-.323-4.838-.942l-.824 1.822zm5.662 1.12c2.008 0 3.811-.342 5.383-1.059l-.83-1.819c-1.26.575-2.77.878-4.553.878v2zm5.394-1.064c1.567-.737 2.812-1.781 3.694-3.141l-1.677-1.089c-.659 1.015-1.602 1.825-2.868 2.421l.851 1.809zm3.694-3.141c.884-1.362 1.318-2.908 1.318-4.607h-2c0 1.342-.337 2.505-.995 3.518l1.677 1.089zm1.318-4.607c0-1.514-.35-2.985-1.037-4.405l-1.8.872c.563 1.164.837 2.338.837 3.533h2zm-1.035-4.399c-.702-1.476-1.82-2.807-3.306-4.005l-1.255 1.557c1.305 1.053 2.208 2.159 2.756 3.308l1.805-.86zm-3.28-2.469l4.812-4.157-1.307-1.513-4.812 4.156 1.307 1.514zm3.496-4.165c1.714 1.517 2.965 3.213 3.776 5.086l1.836-.794c-.94-2.168-2.375-4.098-4.286-5.789l-1.326 1.497zm3.774 5.082a14.98 14.98 0 0 1 1.201 5.951h2c0-2.361-.453-4.609-1.361-6.737l-1.84.786zM17.188 187.25l.471-.882-.003-.001-.468.883zm-5.657-5.156l-.846.532.002.004.844-.536zm0-14.282l.845.536.002-.003-.847-.533zm5.656-5.187l.47.883.002-.001-.471-.882zM34 171.25l.78-.625v-.002l-.78.627zm-3.563-2.438l.347-.937-.004-.002-.343.939zm-14.03 2.438l.795.605.006-.008-.802-.597zm0 7.281l-.797.605.006.008.79-.613zm3.437 2.407l-.363.932.007.002.356-.934zm10.625.031l.331.943.008-.003.008-.002-.347-.938zm9.562-6.031c0 2.465-.628 4.686-1.879 6.688l1.696 1.06c1.457-2.331 2.183-4.922 2.183-7.748h-2zm-1.879 6.688c-1.253 2.005-3 3.594-5.268 4.767l.92 1.776c2.564-1.326 4.589-3.154 6.044-5.483l-1.696-1.06zm-5.268 4.767c-2.256 1.167-4.845 1.763-7.79 1.763v2c3.221 0 6.133-.654 8.71-1.987l-.92-1.776zm-7.79 1.763c-2.744 0-5.216-.6-7.435-1.788l-.943 1.764c2.53 1.354 5.33 2.024 8.378 2.024v-2zm-7.438-1.789c-2.251-1.195-4.004-2.797-5.28-4.809l-1.69 1.072c1.474 2.321 3.493 4.156 6.033 5.503l.937-1.766zm-5.278-4.805a12.192 12.192 0 0 1-1.91-6.624h-2c0 2.771.741 5.341 2.217 7.688l1.693-1.064zm-1.91-6.624c0-2.395.635-4.584 1.908-6.59l-1.69-1.071c-1.476 2.328-2.217 4.889-2.217 7.661h2zm1.91-6.593c1.277-2.032 3.029-3.644 5.278-4.837l-.937-1.766c-2.543 1.348-4.562 3.195-6.034 5.538l1.693 1.065zm5.281-4.838c2.22-1.188 4.69-1.788 7.435-1.788v-2c-3.048 0-5.847.67-8.378 2.024l.943 1.764zm7.435-1.788c2.945 0 5.534.596 7.79 1.763l.92-1.776c-2.577-1.333-5.489-1.987-8.71-1.987v2zm7.79 1.763c2.268 1.173 4.015 2.762 5.268 4.767l1.696-1.06c-1.455-2.329-3.48-4.157-6.045-5.483l-.919 1.776zm5.268 4.767c1.251 2.002 1.88 4.223 1.88 6.689h2c0-2.827-.727-5.418-2.184-7.749l-1.696 1.06zm-1.902 6.689c0-1.629-.485-3.082-1.47-4.313l-1.56 1.25c.681.853 1.03 1.858 1.03 3.063h2zm-1.47-4.315c-.988-1.228-2.337-2.135-3.996-2.748l-.693 1.875c1.383.512 2.409 1.23 3.13 2.127l1.558-1.254zm-4-2.75c-1.673-.611-3.575-.904-5.686-.904v2c1.93 0 3.591.269 5 .783l.686-1.879zm-5.686-.904c-2.13 0-4.017.293-5.637.909l.71 1.869c1.339-.509 2.973-.778 4.927-.778v-2zm-5.637.909c-1.622.617-2.927 1.532-3.853 2.775l1.604 1.194c.658-.882 1.624-1.592 2.96-2.1l-.71-1.869zm-3.847 2.767c-.935 1.23-1.391 2.676-1.391 4.293h2c0-1.218.335-2.23.983-3.083l-1.592-1.21zm-1.391 4.293c0 1.564.462 2.976 1.391 4.198l1.592-1.21c-.654-.861-.983-1.845-.983-2.988h-2zm1.397 4.206c.927 1.195 2.238 2.093 3.865 2.726l.725-1.865c-1.372-.533-2.353-1.24-3.01-2.087l-1.58 1.226zm3.872 2.728c1.62.616 3.496.909 5.606.909v-2c-1.932 0-3.556-.269-4.895-.778l-.71 1.869zm5.606.909c2.127 0 4.035-.282 5.706-.869l-.663-1.887c-1.412.497-3.088.756-5.043.756v2zm5.722-.874c1.65-.611 2.99-1.493 3.959-2.681l-1.55-1.265c-.697.854-1.711 1.555-3.103 2.07l.694 1.876zm3.959-2.681c.99-1.213 1.475-2.66 1.475-4.288h-2c0 1.204-.348 2.195-1.025 3.023l1.55 1.265zm-24.65-24.07h-1v1h1v-1zm0-7.218v-1h-1v1h1zm3.063 0v1h2.583l-1.91-1.74-.674.74zm-2.72-3.782l.915-.405-.005-.011-.91.416zm2.032-11.531l.641.768.008-.008-.649-.76zm27.5-2.563h1v-1h-1v1zm0 7.188v1h1v-1h-1zm-23.031 1.25l.607.794.01-.007-.617-.787zM16 145.031l.911-.412-.004-.009-.907.421zm1.813 2.125l-.555.832.007.005.008.005.54-.842zm22.187.782h1v-1h-1v1zm0 7.218v1h1v-1h-1zm-28.875 0v-7.218h-2v7.218h2zm-1-6.218h3.063v-2h-3.063v2zm3.736-1.74a10.177 10.177 0 0 1-2.478-3.447l-1.829.81a12.179 12.179 0 0 0 2.96 4.116l1.347-1.479zm-2.483-3.458c-.603-1.319-.91-2.759-.91-4.334h-2c0 1.843.361 3.569 1.091 5.166l1.82-.832zm-.91-4.334c0-2.562.899-4.532 2.673-6.013l-1.282-1.536c-2.267 1.894-3.39 4.445-3.39 7.549h2zm2.681-6.021c1.737-1.483 4.577-2.323 8.726-2.323v-2c-4.35 0-7.76.869-10.024 2.803l1.298 1.52zm8.726-2.323H40v-2H21.875v2zm17.125-1v7.188h2v-7.188h-2zm1 6.188H21.937v2H40v-2zm-18.063 0c-2.337 0-4.263.426-5.585 1.463l1.234 1.574c.803-.63 2.189-1.037 4.352-1.037v-2zm-5.576 1.456c-1.364 1.043-1.986 2.588-1.986 4.45h2c0-1.388.44-2.28 1.201-2.862l-1.215-1.588zm-1.986 4.45c0 1.162.238 2.265.718 3.297l1.814-.843a5.74 5.74 0 0 1-.532-2.454h-2zm.714 3.287a5.969 5.969 0 0 0 2.169 2.545l1.11-1.664a3.969 3.969 0 0 1-1.457-1.705l-1.822.824zm2.184 2.555c1.007.646 2.205.94 3.54.94v-2c-1.04 0-1.843-.228-2.46-.624l-1.08 1.684zm3.54.94H40v-2H20.812v2zm18.187-1v7.218h2v-7.218h-2zm1 6.218H10.125v2H40v-2zm-2.688-56.281l.802-.598-.41-.549-.66.184.269.963zM40 102.75l.94-.341-.002-.006-.938.347zm-15.094 14.844l.09-.996-.015-.002-.016-.001-.059.999zm-8.968-.532l.059-.998-1.06-.062v1.06h1zm0 6.469l-.022 1 1.021.022v-1.022h-1zm-5.813-.125h-1v.979l.979.021.021-1zm0-6.687h1v-.944l-.942-.055-.058.999zm-7-.407l-.986.165.13.788.798.046.058-.999zm-1.313-7.874l-.17-.986-.98.17.164.98.987-.164zm.72-.126l.554-.832-.332-.221-.394.068.171.985zm.468.313l.588-.809-.016-.012-.017-.011-.555.832zm.844.406l.316-.948-.009-.003-.009-.003-.298.954zm1.125.188l.09-.996-.021-.002-.022-.001-.047.999zm5.156.469l-.09.995 1.09.1v-1.095h-1zm0-9.188l.021-1-1.021-.022v1.022h1zm5.813.125h1v-.979l-.979-.02-.021.999zm0 9.187h-1v.923l.919.074.08-.997zm8.5.688l-.081.997h.01l.07-.997zm9.062-.812l.52.854.007-.005-.527-.849zm-1.688-10.282l-.268-.963-1.53.426 1.046 1.196.753-.659zm4.7-.933c1.113 1.493 1.961 3.034 2.55 4.624l1.876-.694c-.661-1.785-1.605-3.494-2.824-5.126l-1.603 1.196zm2.548 4.618c.56 1.546.846 3.242.846 5.097h2c0-2.063-.318-3.992-.966-5.779l-1.88.682zm.846 5.097c0 2.899-.848 4.971-2.418 6.38l1.336 1.489c2.097-1.883 3.082-4.561 3.082-7.869h-2zm-2.418 6.38c-1.55 1.391-4.387 2.213-8.8 2.213v2c4.545 0 8.019-.824 10.136-2.724l-1.336-1.489zm-8.8 2.213c-1.11 0-2.34-.06-3.691-.183l-.181 1.992c1.399.127 2.69.191 3.872.191v-2zm-3.723-.186l-8.968-.531-.119 1.997 8.97.531.117-1.997zm-10.027.467v6.469h2v-6.469h-2zm1.021 5.469l-5.813-.125-.043 2 5.813.125.043-2zm-4.834.875v-6.687h-2v6.687h2zm-.942-7.686l-7-.406-.116 1.997 7 .406.116-1.997zm-6.072.428L2.8 108.273l-1.973.329 1.313 7.875 1.972-.329zm-2.127-6.725l.719-.125-.343-1.971-.719.125.343 1.971zm-.007-.278l.164.109.007.005.002.001v.001h.002l.004.003.007.005.001.001h.001l.001.001.001.001h.001l.001.001.002.001a.034.034 0 0 0 .008.005l.008.006.017.011.071.048.17.113 1.11-1.664-.09-.06a2.04 2.04 0 0 1-.041-.027l-.01-.007-.01-.006c-.009-.006-.01-.008-.02-.013l-.134-.09-.014-.01-.004-.002v-.001H3.23v-.001h-.001l-.004-.003-.001-.001h-.001l-.001-.001-.026-.017-.024-.016-.001-.001-.001-.001-.004-.002-.001-.001-.001-.001-.003-.002-.01-.007H3.15l-.002-.001-.001-.001-.002-.001v-.001h-.002v-.001h-.001l-.002-.001-.004-.003-.001-.001-.001-.001h-.001v-.001l-.002-.001-.009-.005-.004-.003-.002-.002h-.001v-.001h-.001l-.008-.005-.007-.005-.004-.002v-.001h-.001l-.002-.001-.003-.003-.003-.002-1.11 1.665zm.435.289c.335.243.72.422 1.133.552l.597-1.909a1.897 1.897 0 0 1-.554-.261l-1.176 1.618zm1.116.546c.422.141.892.214 1.393.238l.095-1.998a3.27 3.27 0 0 1-.856-.137l-.632 1.897zm1.35.235l5.156.468.181-1.991-5.156-.469-.18 1.992zm6.247-.527V100.5h-2v9.188h2zm-1.021-8.188l5.812.125.043-2-5.813-.125-.043 2zm4.834-.875v9.187h2v-9.187h-2zm.919 10.184l8.5.688.161-1.994-8.5-.687-.161 1.993zm8.51.688c1.468.105 2.661.159 3.57.159v-2c-.84 0-1.98-.05-3.428-.153l-.143 1.994zm3.57.159c2.665 0 4.766-.314 6.082-1.114l-1.038-1.709c-.809.491-2.417.823-5.044.823v2zm6.09-1.119c1.376-.853 2.035-2.21 2.035-3.881h-2c0 1.079-.382 1.743-1.089 2.182l1.054 1.699zm2.035-3.881c0-1.424-.276-2.764-.838-4.006l-1.822.825c.437.966.66 2.022.66 3.181h2zm-.838-4.006c-.555-1.224-1.455-2.526-2.659-3.902l-1.505 1.317c1.129 1.29 1.896 2.426 2.341 3.41l1.822-.825zm-3.143-2.28l5.5-1.532-.537-1.926-5.5 1.53.537 1.928zM12.094 70.281l.769.64.002-.004-.771-.636zM40 66.72h1v-1h-1v1zm0 6.844v1h1v-1h-1zm-2.688 0v-1h-2.321l1.595 1.686.727-.686zm2.563 4.156l.936-.353-.003-.006-.933.359zM38.5 90l.725.688.005-.005L38.5 90zm-11.688.438l-.67.742.006.005.665-.748zm-3.406-5.813l.957-.292-.002-.005-.955.297zM22.22 73.344h1V72.26l-1.08.086.08.997zm-5.563 1.906l.687.727.007-.006-.694-.721zm-.593 9.125l.902-.432-.006-.01-.896.442zm3 4.094l.612.79.912-.707-.83-.802-.695.719zm-4.72 3.656l-.738.674.621.682.73-.566-.612-.79zm-3.874-6.031l-.928.374.002.003.926-.377zM27 73.344l.087-.996L26 72.252v1.09h1zm7.5 10.75l.839.545.005-.01-.844-.535zm-24.344-4.375c0-3.772.936-6.67 2.707-8.798l-1.538-1.28c-2.146 2.58-3.169 5.975-3.169 10.078h2zm2.71-8.802c1.692-2.052 4.58-3.198 8.947-3.198v-2c-4.676 0-8.267 1.229-10.49 3.926l1.542 1.272zm8.947-3.198H40v-2H21.812v2zm17.187-1v6.844h2v-6.844h-2zm1 5.844h-2.688v2H40v-2zm-3.414 1.686c.985 1.042 1.773 2.313 2.356 3.829l1.866-.718c-.667-1.734-1.587-3.234-2.769-4.484l-1.453 1.373zm2.353 3.822c.559 1.483.842 3.092.842 4.835h2c0-1.964-.32-3.814-.97-5.54l-1.872.705zm.842 4.835c0 2.951-.722 5.033-2.011 6.41l1.46 1.367c1.753-1.872 2.551-4.52 2.551-7.777h-2zm-2.006 6.406c-1.32 1.391-3.123 2.126-5.525 2.126v2c2.848 0 5.212-.891 6.975-2.75l-1.45-1.376zm-5.525 2.126c-1.896 0-3.468-.587-4.773-1.748l-1.329 1.495c1.695 1.506 3.748 2.252 6.102 2.252v-2zm-4.767-1.743c-1.331-1.201-2.387-2.963-3.12-5.362l-1.913.584c.808 2.643 2.023 4.756 3.692 6.263l1.34-1.485zm-3.122-5.367c-.754-2.42-1.142-5.346-1.142-8.797h-2c0 3.591.403 6.728 1.232 9.391l1.91-.594zm-1.142-8.797v-2.187h-2v2.187h2zm-1.08-3.184c-2.687.215-4.823.88-6.176 2.182l1.387 1.442c.855-.824 2.427-1.429 4.948-1.63l-.159-1.994zm-6.17 2.176c-1.394 1.317-2 3.242-2 5.57h2c0-2.004.518-3.308 1.374-4.116l-1.373-1.454zm-2 5.57c0 1.557.413 3.135 1.197 4.724l1.793-.884c-.674-1.369-.99-2.645-.99-3.84h-2zm1.192 4.714c.764 1.596 1.837 3.056 3.206 4.38l1.39-1.437c-1.214-1.175-2.14-2.445-2.793-3.807l-1.803.864zm3.289 2.871l-4.719 3.657 1.225 1.58 4.719-3.656-1.225-1.58zm-3.367 3.773c-1.637-1.796-2.862-3.708-3.688-5.735l-1.852.755c.923 2.265 2.282 4.374 4.062 6.328l1.478-1.348zm-3.687-5.732c-.833-2.062-1.24-4.06-1.24-6h-2c0 2.226.468 4.478 1.386 6.75l1.854-.75zm24.916-5.125c0-2.352-.747-4.315-2.322-5.767l-1.355 1.47c1.092 1.008 1.678 2.399 1.678 4.297h2zm-2.322-5.767c-1.567-1.445-3.93-2.22-6.903-2.48l-.174 1.993c2.776.241 4.622.944 5.722 1.958l1.355-1.47zM26 73.344v1.437h2v-1.437h-2zm0 1.437c0 3.699.393 6.56 1.282 8.456l1.81-.85C28.4 80.909 28 78.418 28 74.782h-2zm1.282 8.456c.455.97 1.071 1.759 1.877 2.303.812.548 1.752.804 2.779.804v-2c-.683 0-1.221-.166-1.66-.462-.444-.3-.848-.776-1.185-1.494l-1.81.85zm4.655 3.107c1.437 0 2.64-.535 3.401-1.705l-1.676-1.09c-.323.496-.828.795-1.724.795v2zm3.407-1.715c.68-1.072.968-2.45.968-4.035h-2c0 1.372-.253 2.328-.656 2.964l1.688 1.071zm-1.938-25.973l.469.884.009-.005-.478-.879zm-16.125 0l-.471.882.006.003.465-.885zm-5.718-5.375l-.857.517.003.003.854-.52zm3.656-19.843l.649-.761-.577-.492-.63.422.558.83zm4.687 4l-.649.76.015.013.016.013.618-.786zm.438.343l.768.64.659-.79-.81-.636-.617.786zm-.469.563l.196.98.346-.069.226-.271-.768-.64zm-1.438.312l.394.92.041-.018.04-.021-.474-.88zm-.875.657l-.73-.683h-.001l.732.682zm-.875 10.093l-.823.568.005.007.819-.575zm3.532 2.844l-.422.907.01.004.412-.911zm10.218.063l.415.91.011-.006-.425-.904zm3.5-10.813l-.902.43.002.006.9-.436zm-3.03-3.656l-.654-.757-.907.783.933.752.627-.778zm4.812-4.157l.663-.748-.655-.58-.662.572.654.757zm4.031 5.438l.92-.393-.002-.004-.918.397zm.281 6.344c0 2.755-.637 5.18-1.892 7.303l1.722 1.018c1.454-2.46 2.17-5.243 2.17-8.321h-2zm-1.892 7.303c-1.26 2.134-2.992 3.799-5.21 5.006l.955 1.757c2.531-1.377 4.53-3.295 5.977-5.745l-1.722-1.017zm-5.201 5c-2.238 1.188-4.762 1.79-7.594 1.79v2c3.126 0 5.977-.668 8.53-2.022l-.936-1.767zm-7.594 1.79c-2.81 0-5.336-.602-7.597-1.79l-.931 1.77c2.572 1.352 5.421 2.02 8.528 2.02v-2zm-7.591-1.788c-2.263-1.209-4.036-2.877-5.337-5.013l-1.707 1.04c1.49 2.448 3.53 4.363 6.1 5.737l.944-1.764zm-5.334-5.01c-1.294-2.143-1.95-4.586-1.95-7.358h-2c0 3.103.74 5.91 2.237 8.392l1.713-1.034zm-1.95-7.358c0-2.318.47-4.475 1.406-6.484l-1.813-.844c-1.064 2.283-1.593 4.73-1.593 7.328h2zm1.406-6.484c.929-1.992 2.23-3.534 3.9-4.654l-1.113-1.661c-1.996 1.338-3.528 3.172-4.6 5.47l1.813.845zm2.695-4.724l4.687 4 1.298-1.521-4.687-4-1.298 1.521zm4.718 4.026l.438.344 1.236-1.573-.438-.344-1.236 1.573zm.288-1.083l-.47.563 1.537 1.28.469-.563-1.536-1.28zm.103.222l-.036.006a10.598 10.598 0 0 1-.433.04l.142 1.995a6.47 6.47 0 0 0 .72-.08l-.393-1.96zm-.469.046c-.44.031-.858.157-1.247.367l.949 1.76c.152-.082.297-.122.44-.132l-.142-1.995zm-1.166.328c-.456.195-.857.512-1.213.893l1.463 1.365c.228-.244.41-.365.537-.42l-.787-1.838zm-1.213.894c-1.626 1.745-2.393 4.04-2.393 6.775h2c0-2.348.649-4.115 1.856-5.412l-1.463-1.363zm-2.393 6.775c0 1.663.479 3.194 1.426 4.568l1.647-1.135a5.893 5.893 0 0 1-1.073-3.433h-2zm1.43 4.575c.95 1.352 2.274 2.405 3.929 3.175l.844-1.813c-1.387-.646-2.417-1.488-3.135-2.511L15.87 49.98zm3.939 3.18c1.672.756 3.567 1.12 5.662 1.12v-2c-1.863 0-3.469-.323-4.838-.942l-.824 1.822zm5.662 1.12c2.008 0 3.811-.342 5.383-1.059l-.83-1.82c-1.26.576-2.77.88-4.553.88v2zm5.394-1.064c1.567-.737 2.812-1.781 3.694-3.141l-1.677-1.09c-.659 1.016-1.602 1.826-2.868 2.422l.851 1.81zm3.694-3.141c.884-1.362 1.318-2.908 1.318-4.607h-2c0 1.342-.337 2.505-.995 3.518l1.677 1.089zm1.318-4.607c0-1.514-.35-2.985-1.037-4.405l-1.8.872c.563 1.164.837 2.338.837 3.533h2zM34.84 41.07c-.702-1.476-1.82-2.807-3.306-4.005l-1.255 1.557c1.305 1.053 2.208 2.159 2.756 3.308l1.805-.86zm-3.28-2.47l4.812-4.156-1.307-1.513-4.812 4.156L31.56 38.6zm3.496-4.164c1.714 1.517 2.965 3.213 3.776 5.086l1.836-.794c-.94-2.168-2.375-4.098-4.286-5.79l-1.326 1.498zm3.774 5.082c.8 1.873 1.201 3.853 1.201 5.95h2c0-2.36-.453-4.609-1.361-6.736l-1.84.786zM37.313 1.875l.8-.598-.409-.549-.66.184.269.963zM40 6.75l.94-.34-.002-.007L40 6.75zM24.906 21.594l.09-.996-.015-.002h-.016l-.059.998zm-8.968-.532l.059-.998-1.06-.063v1.061h1zm0 6.47l-.022.999 1.021.022v-1.022h-1zm-5.813-.126h-1v.979l.979.021.021-1zm0-6.687h1v-.944l-.942-.055-.058.999zm-7-.407l-.986.165.13.788.798.046.058-.998zm-1.313-7.875l-.17-.985-.98.17.164.98.987-.165zm.72-.124l.554-.833-.332-.221-.394.068.171.986zm.468.312l.588-.809-.016-.012-.017-.011-.555.832zm.844.406l.316-.948-.009-.003-.009-.003-.298.954zm1.125.188l.09-.996-.021-.002-.022-.001-.047.999zm5.156.469l-.09.995 1.09.1v-1.095h-1zm0-9.188l.021-1-1.021-.022V4.5h1zm5.813.125h1v-.979l-.979-.02-.021.999zm0 9.188h-1v.922l.919.074.08-.996zm8.5.687l-.081.997h.01l.07-.997zm9.062-.813l.52.855.007-.005-.527-.85zm-1.688-10.28l-.268-.964-1.53.426 1.046 1.196.753-.659zm4.7-.934c1.113 1.492 1.961 3.034 2.55 4.624l1.876-.694c-.661-1.785-1.605-3.493-2.824-5.126L36.51 2.473zm2.548 4.618c.56 1.546.846 3.242.846 5.096h2c0-2.062-.318-3.991-.966-5.778l-1.88.682zm.846 5.096c0 2.9-.848 4.972-2.418 6.381l1.336 1.489c2.097-1.883 3.082-4.56 3.082-7.87h-2zm-2.418 6.381c-1.55 1.391-4.387 2.213-8.8 2.213v2c4.545 0 8.019-.824 10.136-2.724l-1.336-1.489zm-8.8 2.213c-1.11 0-2.34-.06-3.691-.183l-.181 1.992c1.399.127 2.69.191 3.872.191v-2zm-3.723-.185l-8.968-.532-.119 1.997 8.97.531.117-1.996zm-10.027.466v6.47h2v-6.47h-2zm1.021 5.47l-5.813-.125-.043 1.999 5.813.125.043-2zm-4.834.874V20.72h-2v6.687h2zm-.942-7.686l-7-.406-.116 1.997 7 .406.116-1.997zm-6.072.428L2.8 12.273l-1.973.329 1.313 7.875 1.972-.329zm-2.127-6.725l.719-.125-.343-1.97-.719.124.343 1.97zm-.007-.278l.164.109.007.005.002.001.002.001.004.003.007.005h.001l.001.001h.001l.001.002h.002l.002.002.008.006.008.005.017.01c.063.043.005.005.071.049l.17.113 1.11-1.664-.09-.06-.041-.027-.01-.007-.01-.006c-.009-.006-.01-.008-.02-.013l-.134-.09-.014-.01-.004-.002-.002-.001-.001-.001-.004-.003h-.001l-.001-.001-.001-.001-.026-.017a3.743 3.743 0 0 1-.024-.016l-.001-.001H3.17v-.001l-.004-.002h-.001v-.001h-.001a3.255 3.255 0 0 1-.013-.009l-.001-.001-.002-.001-.001-.001-.002-.001-.002-.001v-.001h-.001l-.002-.001-.004-.003h-.001v-.001h-.001v-.001h-.001l-.002-.002a.522.522 0 0 0-.009-.005l-.004-.003-.002-.002h-.001l-.001-.001-.008-.005-.007-.005-.004-.002-.001-.001-.002-.002-.003-.002-.003-.002-1.11 1.665zm.435.289c.335.243.72.422 1.133.552l.597-1.91a1.906 1.906 0 0 1-.554-.26l-1.176 1.618zm1.116.546a5.2 5.2 0 0 0 1.393.238l.095-1.998a3.239 3.239 0 0 1-.856-.137l-.632 1.897zm1.35.235l5.156.468.181-1.991-5.156-.47-.18 1.993zm6.247-.527V4.5h-2v9.188h2zM10.104 5.5l5.812.125.043-2-5.813-.125-.043 2zm4.834-.875v9.188h2V4.624h-2zm.919 10.184l8.5.688.161-1.994-8.5-.687-.161 1.993zm8.51.689c1.468.104 2.661.158 3.57.158v-2c-.84 0-1.98-.05-3.428-.154l-.143 1.995zm3.57.158c2.665 0 4.766-.314 6.082-1.114l-1.038-1.709c-.809.491-2.417.823-5.044.823v2zm6.09-1.119c1.376-.853 2.035-2.21 2.035-3.88h-2c0 1.078-.382 1.742-1.089 2.18l1.054 1.7zm2.035-3.88c0-1.425-.276-2.765-.838-4.007l-1.822.825c.437.966.66 2.022.66 3.181h2zm-.838-4.007c-.555-1.224-1.455-2.526-2.659-3.902L31.06 4.065c1.129 1.29 1.896 2.426 2.341 3.41l1.822-.825zM32.08 4.37l5.5-1.532-.537-1.926-5.5 1.53.537 1.928z"
      fill="#ffe7d0"
    />
  </svg>
)

export default SvgComponent