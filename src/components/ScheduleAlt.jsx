import React from "react"

const SvgComponent = props => (
  <svg width={254} height={48} fill="none" {...props}>
    <path
      d="M8.125 44.844l-.342.94.007.002.335-.942zM2 40.969l-.868-.496-.388.679.565.54.691-.723zm3-5.25l.868.496.004-.006-.872-.49zm.281-.5l.515-.858-.882-.529-.504.896.871.49zm.625.375l.929-.372-.125-.312-.29-.174-.514.858zm.157.562l-.975.225.008.035.01.034.957-.294zm.406.813l-.822.569.025.037.029.034.768-.64zm.812.75l-.6.8.6-.8zm3.844 1.937l-.286.959.008.002.009.002.269-.963zm3.625-7.25l.275-.961-.011-.003-.012-.003-.252.967zm-8.031-3.375l-.587.81.01.007.577-.817zM5.25 18.781l-.822-.569-.002.003.824.566zm4-3.156l.398.917.005-.002-.403-.915zm12.5 0l-.373.928.012.005.361-.933zm5.344 3.469l.811.584.507-.704-.625-.601-.693.72zm-3.625 5.031l-.812-.585-.01.015-.01.015.832.555zm-.313.469l-.564.825.835.572.561-.843-.832-.554zm-.593-.407l-.981.197.08.399.336.23.564-.826zm-.125-.562l-.99.141.006.043.01.04.974-.224zm-1.125-1.594l-.583.813.008.006.008.005.567-.824zm-9.594 2.407l-.737.675.014.016.016.016.707-.707zm2.125 1.312l-.39.921.008.003.382-.924zm4.094 1.406l-.293.957.293-.957zm5.78 2.282l-.483.875.01.005.474-.88zm2.47 11.593l-.825-.565-.002.003.826.562zm-10.22 4c-2.914 0-5.411-.385-7.508-1.13l-.67 1.885c2.361.839 5.094 1.245 8.179 1.245v-2zm-7.5-1.127c-2.09-.761-4.015-1.975-5.777-3.658l-1.382 1.446c1.946 1.858 4.104 3.228 6.474 4.091l.684-1.879zm-5.6-2.44l3-5.25-1.736-.991-3 5.25 1.736.992zm3.004-5.255l.28-.5-1.742-.98-.282.5 1.744.98zm-1.105-.133l.625.375 1.029-1.715-.625-.375-1.03 1.715zm.21-.11l.01.027a7.273 7.273 0 0 1 .1.388l1.95-.45a5.244 5.244 0 0 0-.202-.709l-1.857.743zm.13.484c.118.384.303.746.54 1.088L7.29 36.4a1.971 1.971 0 0 1-.273-.538l-1.911.588zM5.7 37.61c.27.323.601.625.98.91l1.2-1.6a3.827 3.827 0 0 1-.644-.59l-1.536 1.28zm.98.91a13.149 13.149 0 0 0 4.158 2.096l.572-1.917a11.148 11.148 0 0 1-3.53-1.78l-1.2 1.6zm4.175 2.1c1.524.426 3.253.631 5.175.631v-2c-1.785 0-3.327-.19-4.637-.557l-.538 1.926zm5.175.631c1.787 0 3.3-.288 4.394-1.009 1.167-.768 1.731-1.944 1.731-3.366h-2c0 .828-.29 1.34-.831 1.696-.615.405-1.663.679-3.294.679v2zm6.125-4.375c0-.907-.281-1.731-.857-2.421l-1.536 1.28c.258.31.393.673.393 1.141h2zm-.857-2.421c-.55-.662-1.368-1.197-2.354-1.646l-.828 1.821c.848.385 1.364.767 1.646 1.105l1.536-1.28zm-2.354-1.646c-.981-.446-2.295-.899-3.92-1.363l-.55 1.923c1.583.452 2.79.874 3.642 1.261l.828-1.82zm-3.943-1.37c-3.375-.879-5.925-1.965-7.706-3.223l-1.154 1.633c2.052 1.45 4.856 2.614 8.356 3.526l.504-1.935zm-7.696-3.216c-1.63-1.182-2.431-2.763-2.431-4.847h-2c0 2.707 1.094 4.898 3.257 6.466l1.174-1.62zm-2.431-4.847c0-1.541.405-2.872 1.199-4.027l-1.648-1.133c-1.04 1.511-1.551 3.243-1.551 5.16h2zm1.197-4.024c.817-1.18 1.993-2.122 3.576-2.809l-.796-1.834c-1.875.813-3.366 1.975-4.424 3.504l1.644 1.139zm3.581-2.81c1.598-.705 3.498-1.072 5.722-1.072v-2c-2.442 0-4.626.403-6.528 1.24l.806 1.831zm5.722-1.072c2.222 0 4.218.366 6.002 1.084l.746-1.856c-2.05-.824-4.303-1.228-6.748-1.228v2zm6.014 1.089c1.804.698 3.474 1.778 5.012 3.257l1.386-1.442c-1.712-1.647-3.605-2.879-5.676-3.68l-.722 1.865zm4.893 1.951l-3.625 5.031 1.623 1.17 3.625-5.032-1.623-1.169zm-3.645 5.061l-.313.469 1.664 1.11.313-.47-1.664-1.109zm1.084.198l-.594-.406-1.13 1.65.595.407 1.129-1.65zm-.178.223c-.024-.12-.069-.32-.131-.59l-1.949.449c.063.272.101.446.119.534l1.961-.393zm-.116-.507a2.958 2.958 0 0 0-.511-1.272l-1.644 1.139c.11.158.158.295.176.415l1.98-.282zm-.511-1.272a3.993 3.993 0 0 0-1.037-1.005l-1.133 1.648c.255.176.42.344.526.495l1.644-1.138zm-1.021-.994c-1.867-1.337-4.01-2-6.395-2v2c1.99 0 3.722.546 5.23 1.626l1.165-1.626zm-6.395-2c-1.38 0-2.61.238-3.643.767l.911 1.78c.675-.346 1.57-.546 2.732-.546v-2zm-3.643.767c-1.078.552-1.826 1.436-1.826 2.671h2c0-.265.107-.568.737-.891l-.911-1.78zm-1.826 2.671c0 .934.32 1.77.95 2.457l1.475-1.351a1.55 1.55 0 0 1-.425-1.106h-2zm.98 2.489c.605.604 1.441 1.103 2.444 1.526l.778-1.842c-.873-.369-1.453-.745-1.807-1.099l-1.414 1.415zm2.451 1.53c1.002.413 2.401.893 4.183 1.438l.585-1.913c-1.76-.538-3.09-.996-4.005-1.374l-.763 1.848zm4.184 1.438c2.427.74 4.28 1.477 5.59 2.2l.966-1.75c-1.482-.82-3.483-1.604-5.973-2.363l-.583 1.913zm5.6 2.205c1.28.689 2.15 1.484 2.68 2.358l1.71-1.04c-.76-1.25-1.933-2.268-3.444-3.08l-.947 1.762zm2.68 2.358c.527.866.824 2.007.824 3.48h2c0-1.735-.35-3.26-1.114-4.52l-1.71 1.04zm.824 3.48c0 1.514-.452 2.944-1.387 4.31l1.65 1.13c1.147-1.675 1.737-3.495 1.737-5.44h-2zm-1.39 4.313c-.916 1.346-2.188 2.448-3.847 3.297l.911 1.78c1.925-.984 3.465-2.299 4.59-3.952l-1.653-1.125zm-3.847 3.297c-1.637.838-3.479 1.265-5.544 1.265v2c2.35 0 4.51-.489 6.455-1.484l-.91-1.781zm13.83-5.36l-.883.469.005.009.879-.478zm0-16.125l-.881-.471-.003.006.885.465zm5.376-5.718l-.517-.857-.003.003.52.854zm19.843 3.656l.761.649.492-.577-.422-.63-.83.558zm-4 4.687l-.76-.649-.013.015-.013.016.786.618zm-.343.438l-.64.768.79.659.636-.81-.786-.617zm-.563-.469l-.98.196.069.346.271.226.64-.768zm-.312-1.438l-.92.394.018.041.021.04.88-.474zm-.657-.875l.683-.73v-.001l-.682.732zm-10.093-.875l-.568-.823-.007.005.575.819zM41.75 25.22l-.907-.422-.004.01.911.412zm-.063 10.218l-.91.415.006.011.904-.425zm10.813 3.5l-.43-.902-.006.002.436.9zm3.656-3.03l.757-.654-.783-.907-.752.933.778.627zm4.157 4.812l.748.663.58-.655-.572-.662-.757.654zm-5.438 4.031l.393.92.004-.002-.397-.918zm-6.344.281c-2.755 0-5.18-.637-7.303-1.892l-1.018 1.722c2.46 1.454 5.243 2.17 8.321 2.17v-2zm-7.303-1.892c-2.134-1.26-3.799-2.992-5.006-5.21l-1.757.955c1.377 2.531 3.295 4.53 5.745 5.977l1.017-1.722zm-5-5.201c-1.188-2.238-1.79-4.762-1.79-7.594h-2c0 3.126.668 5.977 2.022 8.53l1.767-.936zm-1.79-7.594c0-2.81.602-5.336 1.79-7.597l-1.77-.931c-1.352 2.572-2.02 5.421-2.02 8.528h2zm1.788-7.591c1.209-2.263 2.877-4.036 5.013-5.337l-1.04-1.707c-2.448 1.49-4.363 3.53-5.737 6.1l1.764.944zm5.01-5.334c2.143-1.294 4.586-1.95 7.358-1.95v-2c-3.103 0-5.91.74-8.392 2.237l1.034 1.713zm7.358-1.95c2.318 0 4.475.47 6.484 1.406l.844-1.813c-2.283-1.064-4.73-1.593-7.328-1.593v2zm6.484 1.406c1.992.929 3.534 2.23 4.654 3.9l1.661-1.113c-1.338-1.996-3.172-3.528-5.47-4.6l-.845 1.813zm4.724 2.695l-4 4.687 1.521 1.298 4-4.687-1.521-1.298zm-4.026 4.718l-.344.438 1.573 1.236.344-.438-1.573-1.236zm1.083.288l-.563-.47-1.28 1.537.563.469 1.28-1.536zm-.222.103l-.006-.036a10.598 10.598 0 0 1-.04-.433l-1.995.142c.02.286.045.544.08.72l1.96-.393zm-.046-.469a3.075 3.075 0 0 0-.367-1.247l-1.76.949c.082.152.122.297.132.44l1.995-.142zm-.328-1.166c-.195-.456-.512-.857-.893-1.213l-1.365 1.463c.244.228.365.41.42.537l1.838-.787zm-.894-1.213c-1.745-1.626-4.04-2.393-6.775-2.393v2c2.348 0 4.115.649 5.412 1.856l1.363-1.463zm-6.775-2.393c-1.663 0-3.194.479-4.568 1.426l1.135 1.647a5.893 5.893 0 0 1 3.433-1.073v-2zm-4.575 1.43c-1.352.95-2.405 2.274-3.175 3.929l1.813.844c.646-1.387 1.488-2.417 2.511-3.135L44.02 20.87zm-3.18 3.939c-.756 1.672-1.12 3.567-1.12 5.662h2c0-1.863.323-3.469.942-4.838l-1.822-.824zm-1.12 5.662c0 2.008.342 3.811 1.059 5.383l1.82-.83c-.576-1.26-.88-2.77-.88-4.553h-2zm1.064 5.394c.737 1.567 1.781 2.812 3.141 3.694l1.09-1.677c-1.016-.659-1.826-1.602-2.422-2.868l-1.81.851zm3.141 3.694c1.362.884 2.908 1.318 4.607 1.318v-2c-1.342 0-2.505-.337-3.518-.995l-1.089 1.677zm4.607 1.318c1.514 0 2.985-.35 4.405-1.037l-.872-1.8c-1.164.563-2.338.837-3.533.837v2zm4.399-1.035c1.476-.702 2.807-1.82 4.005-3.306l-1.557-1.255c-1.053 1.305-2.159 2.208-3.308 2.756l.86 1.805zm2.47-3.28l4.156 4.812 1.513-1.307-4.156-4.812L55.4 36.56zm4.164 3.496c-1.517 1.714-3.213 2.965-5.086 3.776l.794 1.836c2.168-.94 4.098-2.375 5.79-4.286l-1.498-1.326zm-5.082 3.774c-1.873.8-3.853 1.201-5.95 1.201v2c2.36 0 4.609-.453 6.736-1.361l-.786-1.84zM66.844 1.813v-1h-1v1h1zm7.719 0h1v-1h-1v1zm0 .718l.737.676.263-.287v-.389h-1zm-.438.844l.978.21.003-.014-.981-.196zm-.063 1.5h1V4.846l-1 .029zm0 13.313h-1v2.586l1.74-1.914-.74-.672zm3.626-2.72l-.431-.902-.006.003.436.9zm11.656 2l-.749.664.004.003.745-.666zM92 45v1h1v-1h-1zm-7.25 0h-1v1h1v-1zm-1.156-23l-.822.57.007.01.815-.58zm-8.688 1.938l.891.453.004-.006-.895-.448zM74.062 45v1h1v-1h-1zm-7.218 0h-1v1h1v-1zm0-42.188h7.719v-2h-7.72v2zm6.719-1v.72h2v-.72h-2zm.262.044c-.344.375-.58.82-.68 1.323l1.96.392a.738.738 0 0 1 .195-.364l-1.475-1.351zm-.678 1.31c-.09.421-.105 1.03-.084 1.738l2-.058c-.022-.708.005-1.1.04-1.261l-1.956-.42zm-.085 1.709v13.313h2V4.874h-2zm1.74 13.985a10.84 10.84 0 0 1 3.322-2.491l-.873-1.8a12.843 12.843 0 0 0-3.928 2.946l1.48 1.345zm3.316-2.489c1.276-.61 2.526-.902 3.757-.902v-2c-1.56 0-3.103.373-4.618 1.097l.861 1.805zm3.757-.902c2.985 0 5.177.92 6.72 2.663l1.497-1.326c-1.998-2.258-4.785-3.337-8.217-3.337v2zm6.724 2.667C90.13 19.846 91 22.686 91 26.875h2c0-4.395-.9-7.826-2.911-10.073l-1.49 1.334zM91 26.875V45h2V26.875h-2zM92 44h-7.25v2H92v-2zm-6.25 1V26.937h-2V45h2zm0-18.063c0-2.291-.394-4.185-1.341-5.517l-1.63 1.16c.594.835.971 2.233.971 4.358h2zm-1.334-5.506c-.94-1.357-2.29-2.056-3.947-2.056v2c1.01 0 1.742.384 2.303 1.194l1.644-1.138zm-3.947-2.056a6.916 6.916 0 0 0-3.788 1.095l1.076 1.685c.814-.52 1.71-.78 2.712-.78v-2zM76.68 20.47c-1.144.73-2.033 1.747-2.67 3.02l1.79.895c.488-.977 1.141-1.71 1.956-2.23L76.68 20.47zm-2.666 3.014c-.644 1.263-.953 2.683-.953 4.235h2c0-1.282.254-2.383.735-3.328l-1.782-.907zm-.953 4.235V45h2V27.719h-2zm1 16.281h-7.218v2h7.219v-2zm-6.218 1V1.812h-2V45h2zm31.437-6.219l-.88.475.005.01.875-.485zm4.938-22.343l.515.856.007-.003-.522-.854zm13.75-.282l-.506.863.011.006.495-.869zm4.593 4.969l-.891.454.002.003.889-.457zm1.563 10.063l-.996-.091-.001.01v.01l.997.07zm-.063.875v1h.932l.066-.93-.998-.07zm-19.593 0v-1h-1.121l.127 1.113.994-.114zm2.562 6.187l-.707.707.005.005.702-.712zm9.157 1.125l.408.913.011-.005-.419-.908zm3.437-2.688l.707-.707-.799-.799-.696.89.788.617zm3.969 3.97l.764.644.592-.702-.649-.65-.707.707zm-6.5-13.844v1h1v-1h-1zm-.75-3.47l-.912.412.003.007.004.008.905-.426zm-2.094-2.53l-.585.81.011.008.011.008.563-.826zm-7.469.937l.737.676.006-.006-.743-.67zm-2.062 5.063l-.994-.108-.12 1.108h1.114v-1zm7.562 18.218c-2.725 0-5.117-.59-7.202-1.749l-.971 1.748c2.415 1.342 5.149 2.001 8.173 2.001v-2zm-7.202-1.749c-2.08-1.156-3.718-2.81-4.923-4.985l-1.75.969c1.38 2.49 3.282 4.42 5.702 5.764l.971-1.748zm-4.918-4.976c-1.178-2.182-1.786-4.784-1.786-7.837h-2c0 3.321.663 6.262 2.026 8.787l1.76-.95zm-1.786-7.837c0-3.104.58-5.768 1.707-8.022l-1.789-.894c-1.29 2.58-1.918 5.561-1.918 8.916h2zm1.707-8.022c1.13-2.26 2.682-3.967 4.652-5.153l-1.031-1.713c-2.321 1.397-4.124 3.4-5.41 5.972l1.789.894zm4.659-5.156c1.976-1.21 4.22-1.822 6.759-1.822v-2c-2.878 0-5.488.7-7.803 2.115l1.044 1.707zm6.759-1.822c2.232 0 4.211.522 5.963 1.55l1.012-1.725c-2.082-1.222-4.416-1.825-6.975-1.825v2zm5.974 1.556c1.749.997 3.151 2.5 4.197 4.554l1.783-.908c-1.204-2.362-2.864-4.172-4.99-5.384l-.99 1.738zm4.199 4.557c1.036 2.014 1.577 4.495 1.577 7.48h2c0-3.222-.584-6.033-1.798-8.394l-1.779.914zm1.577 7.48c0 .455-.038 1.128-.121 2.035l1.992.181c.084-.926.129-1.67.129-2.215h-2zm-.122 2.054l-.063.875 1.995.143.062-.875-1.994-.143zm.934-.053h-19.593v2h19.593v-2zm-20.587 1.113c.329 2.867 1.241 5.173 2.849 6.781l1.414-1.414c-1.183-1.184-1.979-3.003-2.276-5.594l-1.987.227zm2.854 6.786c1.581 1.557 3.499 2.35 5.702 2.35v-2c-1.671 0-3.087-.581-4.298-1.774l-1.404 1.424zm5.702 2.35c1.531 0 3.055-.348 4.565-1.024l-.817-1.826c-1.282.574-2.529.85-3.748.85v2zm4.576-1.03c1.532-.708 2.807-1.7 3.806-2.979l-1.576-1.231c-.792 1.013-1.809 1.812-3.069 2.395l.839 1.816zm2.311-2.887l3.969 3.968 1.414-1.414-3.969-3.969-1.414 1.415zm3.911 2.617c-2.839 3.367-6.334 5.02-10.548 5.02v2c4.828 0 8.874-1.932 12.077-5.731l-1.529-1.29zm-4.735-13.2c0-1.387-.279-2.69-.845-3.894l-1.81.852c.433.92.655 1.93.655 3.043h2zm-.839-3.88c-.55-1.22-1.365-2.212-2.442-2.946l-1.126 1.653c.756.516 1.338 1.212 1.745 2.116l1.823-.822zm-2.42-2.93c-1.079-.779-2.329-1.158-3.71-1.158v2c.994 0 1.828.266 2.54.78l1.17-1.623zm-3.71-1.158c-2.026 0-3.746.75-5.086 2.236l1.485 1.34c.951-1.056 2.127-1.576 3.601-1.576v-2zm-5.081 2.23c-1.324 1.444-2.073 3.35-2.319 5.631l1.988.215c.212-1.969.837-3.438 1.805-4.494l-1.474-1.352zm-1.325 6.738h12.375v-2h-12.375v2zm30.469 16.438l-.516.857.006.004.51-.861zm-4.594-5.219l-.901.435.002.003.899-.438zM130.625 22l-.902-.432-.003.007.905.425zm17.875-4.531l-.716.698 1.716 1.758v-2.456h-1zm0-15.657v-1h-1v1h1zm7.812 0h1v-1h-1v1zm0 .72l.738.675.262-.287v-.389h-1zm-.437.843l.978.21.003-.014-.981-.196zm-.063 1.5l1 .003.001-.016-.001-.016-1 .029zm-.124 36.531l-1-.003v.003h1zm.124 1.938l-.989.146.001.006.988-.152zm.563 1.656v1h1.645l-.757-1.46-.888.46zm-6.969 0l-.88.474.283.526h.597v-1zm-.531-1.531l-.996.086.002.022.002.021.992-.13zm-.063-2.063h1l-1.923-.384.923.384zm-11-18.312l-.857-.515-.004.007.861.508zm-.687 12.812l-.912.41.005.011.907-.42zm2.469 3.125l-.551.835.008.005.543-.84zm2.062 5.938c-2.206 0-4.185-.53-5.959-1.58l-1.019 1.722c2.101 1.242 4.434 1.858 6.978 1.858v-2zm-5.953-1.576c-1.75-1.053-3.158-2.636-4.21-4.8l-1.798.876c1.197 2.462 2.852 4.358 4.977 5.638l1.031-1.714zm-4.208-4.796c-1.044-2.165-1.589-4.841-1.589-8.066h-2c0 3.442.581 6.433 1.787 8.934l1.802-.868zm-1.589-8.066c0-3.133.552-5.826 1.624-8.106l-1.81-.85c-1.22 2.595-1.814 5.59-1.814 8.956h2zm1.621-8.1c1.102-2.3 2.544-4.016 4.309-5.193l-1.109-1.664c-2.11 1.407-3.772 3.42-5.004 5.994l1.804.864zm4.309-5.193c1.778-1.185 3.69-1.77 5.758-1.77v-2c-2.474 0-4.77.708-6.867 2.106l1.109 1.664zm5.758-1.77c1.004 0 2.097.242 3.288.761l.799-1.833c-1.393-.607-2.758-.927-4.087-.927v2zm3.288.761c1.191.519 2.151 1.169 2.902 1.938l1.432-1.397c-.958-.98-2.143-1.768-3.535-2.374l-.799 1.833zm4.618 1.24V1.812h-2V17.47h2zm-1-14.657h7.812v-2H148.5v2zm6.812-1v.72h2v-.72h-2zm.263.044c-.344.375-.58.82-.681 1.323l1.962.392a.736.736 0 0 1 .194-.364l-1.475-1.351zm-.678 1.31c-.09.421-.105 1.03-.084 1.738l1.999-.058c-.021-.708.006-1.1.041-1.261l-1.956-.42zm-.084 1.706l-.125 36.53 1.999.008.125-36.532-1.999-.006zm-.125 36.534c0 .766.043 1.462.135 2.084l1.979-.293a12.29 12.29 0 0 1-.114-1.79h-2zm.136 2.09c.102.664.329 1.32.663 1.964l1.776-.92a4.38 4.38 0 0 1-.462-1.348l-1.977.304zm1.551.504h-6.969v2h6.969v-2zm-6.088.526c-.249-.463-.377-.856-.42-1.187l-1.984.26c.082.627.308 1.254.643 1.875l1.761-.948zm-.416-1.144a24.586 24.586 0 0 1-.059-1.976h-2c0 .905.021 1.627.067 2.15l1.992-.174zm-1.982-2.36c-.543 1.305-1.387 2.265-2.54 2.921l.989 1.739c1.556-.886 2.691-2.196 3.398-3.891l-1.847-.77zm-2.54 2.921c-1.216.693-2.443 1.026-3.693 1.026v2c1.626 0 3.191-.438 4.682-1.287l-.989-1.739zM142.688 41c2.32 0 4.119-1.052 5.274-3.074 1.108-1.939 1.6-4.718 1.6-8.207h-2c0 3.364-.486 5.726-1.336 7.215-.803 1.405-1.942 2.066-3.538 2.066v2zm6.874-11.281c0-2.956-.425-5.417-1.351-7.314l-1.797.877c.741 1.52 1.148 3.643 1.148 6.437h2zm-1.351-7.314c-.494-1.012-1.202-1.811-2.133-2.35-.924-.533-2.007-.774-3.203-.774v2c.929 0 1.648.187 2.203.507.548.316.996.798 1.336 1.494l1.797-.877zm-5.336-3.124c-2.589 0-4.608 1.111-5.92 3.298l1.715 1.03c.938-1.564 2.294-2.328 4.205-2.328v-2zm-5.924 3.305c-1.223 2.077-1.795 4.707-1.795 7.82h2c0-2.886.533-5.131 1.518-6.805l-1.723-1.015zm-1.795 7.82c0 2.316.334 4.302 1.057 5.91l1.824-.82c-.569-1.266-.881-2.947-.881-5.09h-2zm1.062 5.921c.718 1.549 1.646 2.761 2.825 3.539l1.101-1.67c-.778-.513-1.497-1.384-2.112-2.71l-1.814.841zm2.833 3.544c1.142.738 2.359 1.129 3.637 1.129v-2c-.848 0-1.693-.254-2.552-.809l-1.085 1.68zm25.73 3.441l-.764.645.007.009.757-.654zm-2.531-28.187v-1h-1v1h1zm7.062 0h1v-1h-1v1zm1.126 23.656l-.823.57.008.01.815-.58zM180 15.125v-1h-1v1h1zm7.219 0h1v-1h-1v1zm.093 27.906l-.995.094.001.015.002.015.992-.124zm.563 1.969v1h1.549l-.638-1.412-.911.412zm-7 0l-.887.461.28.539h.607v-1zm-.531-1.531l-.993.119.003.023.003.022.987-.164zm-.094-1.938h1v-3.719l-1.865 3.218.865.501zM176.688 45l.484.875.009-.005-.493-.87zm-4.5.281c-3.013 0-5.175-.913-6.65-2.622l-1.514 1.307c1.942 2.25 4.718 3.315 8.164 3.315v-2zm-6.642-2.613c-1.464-1.734-2.296-4.615-2.296-8.855h-2c0 4.425.855 7.878 2.767 10.144l1.529-1.29zm-2.296-8.855V15.125h-2v18.688h2zm-1-17.688h7.062v-2h-7.062v2zm6.062-1v18.688h2V15.125h-2zm0 18.688c0 2.306.382 4.207 1.303 5.537l1.645-1.138c-.579-.836-.948-2.248-.948-4.4h-2zm1.311 5.548c.959 1.348 2.315 2.045 3.971 2.045v-2c-1.011 0-1.759-.386-2.342-1.204l-1.629 1.159zm3.971 2.045a6.92 6.92 0 0 0 3.788-1.094l-1.076-1.686c-.815.52-1.711.78-2.712.78v2zm3.788-1.094c1.144-.73 2.032-1.748 2.669-3.021l-1.789-.894c-.489.977-1.142 1.71-1.956 2.229l1.076 1.686zm2.669-3.021c.64-1.28.949-2.708.949-4.26h-2c0 1.282-.253 2.396-.738 3.366l1.789.894zm.949-4.26V15.125h-2v17.906h2zm-1-16.906h7.219v-2H180v2zm6.219-1v25h2v-25h-2zm0 25c0 1.28.031 2.286.098 3l1.991-.187c-.058-.62-.089-1.551-.089-2.813h-2zm.101 3.03c.097.772.313 1.524.644 2.257l1.822-.824a5.834 5.834 0 0 1-.481-1.68l-1.985.247zm1.555.845h-7v2h7v-2zm-6.113.539a4.178 4.178 0 0 1-.432-1.235l-1.973.33c.103.618.319 1.228.631 1.827l1.774-.922zm-.425-1.19a15.743 15.743 0 0 1-.087-1.818h-2c0 .794.032 1.483.101 2.057l1.986-.238zm-1.952-2.32c-.739 1.274-1.793 2.308-3.191 3.101l.987 1.74c1.685-.957 3.006-2.236 3.934-3.837l-1.73-1.003zm-3.182 3.096c-1.424.79-2.759 1.156-4.015 1.156v2c1.659 0 3.325-.487 4.984-1.406l-.969-1.75zm19.078-4.688v-1h-1v1h1zm8.188 0v1h1v-1h-1zm0-32.062h1v-1h-1v1zm-7.781 0h-1v1h1v-1zm0-5.563v-1h-1v1h1zm15.031 0h1v-1h-1v1zm0 37.626h-1v1h1v-1zm8.125 0h1v-1h-1v1zm0 5.562v1h1v-1h-1zm-23.563 0h-1v1h1v-1zm0-4.563h8.188v-2h-8.188v2zm9.188-1V7.376h-2v32.063h2zm-1-33.062h-7.781v2h7.781v-2zm-6.781 1V1.812h-2v5.563h2zm-1-4.563h15.031v-2h-15.031v2zm14.031-1v37.626h2V1.812h-2zm1 38.626h8.125v-2h-8.125v2zm7.125-1V45h2v-5.563h-2zm1 4.562h-23.563v2h23.563v-2zm-22.563 1v-5.563h-2V45h2zm31-6.219l-.88.475.005.01.875-.485zm4.938-22.343l.515.856.007-.003-.522-.854zm13.75-.282l-.506.863.011.006.495-.869zm4.593 4.969l-.891.454.002.003.889-.457zm1.563 10.063l-.996-.091-.001.01v.01l.997.07zm-.063.875v1h.932l.066-.93-.998-.07zm-19.593 0v-1h-1.121l.127 1.113.994-.114zm2.562 6.187l-.707.707.005.005.702-.712zm9.157 1.125l.408.913.011-.005-.419-.908zm3.437-2.688l.707-.707-.799-.799-.696.89.788.617zm3.969 3.97l.764.644.592-.702-.649-.65-.707.707zm-6.5-13.844v1h1v-1h-1zm-.75-3.47l-.912.412.003.007.004.008.905-.426zm-2.094-2.53l-.585.81.011.008.011.008.563-.826zm-7.469.937l.737.676.006-.006-.743-.67zm-2.062 5.063l-.994-.108-.12 1.108h1.114v-1zm7.562 18.218c-2.725 0-5.117-.59-7.202-1.749l-.971 1.748c2.415 1.342 5.149 2.001 8.173 2.001v-2zm-7.202-1.749c-2.08-1.156-3.718-2.81-4.923-4.985l-1.75.969c1.379 2.49 3.282 4.42 5.702 5.764l.971-1.748zm-4.918-4.976c-1.178-2.182-1.786-4.784-1.786-7.837h-2c0 3.321.663 6.262 2.026 8.787l1.76-.95zm-1.786-7.837c0-3.104.58-5.768 1.707-8.022l-1.789-.894c-1.29 2.58-1.918 5.561-1.918 8.916h2zm1.707-8.022c1.13-2.26 2.682-3.967 4.652-5.153l-1.031-1.713c-2.321 1.397-4.124 3.4-5.41 5.972l1.789.894zm4.659-5.156c1.976-1.21 4.22-1.822 6.759-1.822v-2c-2.878 0-5.488.7-7.803 2.115l1.044 1.707zm6.759-1.822c2.232 0 4.211.522 5.963 1.55l1.012-1.725c-2.082-1.222-4.416-1.825-6.975-1.825v2zm5.974 1.556c1.749.997 3.151 2.5 4.197 4.554l1.783-.908c-1.204-2.362-2.864-4.172-4.99-5.384l-.99 1.738zm4.199 4.557c1.036 2.014 1.577 4.495 1.577 7.48h2c0-3.222-.584-6.033-1.798-8.394l-1.779.914zm1.577 7.48c0 .455-.038 1.128-.121 2.035l1.992.181c.084-.926.129-1.67.129-2.215h-2zm-.122 2.054l-.063.875 1.995.143.062-.875-1.994-.143zm.934-.053h-19.593v2h19.593v-2zm-20.587 1.113c.329 2.867 1.241 5.173 2.849 6.781l1.414-1.414c-1.183-1.184-1.979-3.003-2.276-5.594l-1.987.227zm2.854 6.786c1.581 1.557 3.499 2.35 5.702 2.35v-2c-1.671 0-3.087-.581-4.298-1.774l-1.404 1.424zm5.702 2.35c1.531 0 3.055-.348 4.565-1.024l-.817-1.826c-1.282.574-2.529.85-3.748.85v2zm4.576-1.03c1.532-.708 2.807-1.7 3.806-2.979l-1.576-1.231c-.792 1.013-1.809 1.812-3.069 2.395l.839 1.816zm2.311-2.887l3.969 3.968 1.414-1.414-3.969-3.969-1.414 1.415zm3.911 2.617c-2.839 3.367-6.334 5.02-10.548 5.02v2c4.828 0 8.874-1.932 12.077-5.731l-1.529-1.29zm-4.735-13.2c0-1.387-.279-2.69-.845-3.894l-1.81.852c.433.92.655 1.93.655 3.043h2zm-.839-3.88c-.55-1.22-1.365-2.212-2.442-2.946l-1.126 1.653c.756.516 1.338 1.212 1.745 2.116l1.823-.822zm-2.42-2.93c-1.079-.779-2.329-1.158-3.71-1.158v2c.994 0 1.828.266 2.54.78l1.17-1.623zm-3.71-1.158c-2.026 0-3.746.75-5.086 2.236l1.485 1.34c.951-1.056 2.127-1.576 3.601-1.576v-2zm-5.081 2.23c-1.324 1.444-2.073 3.35-2.319 5.631l1.988.215c.212-1.969.837-3.438 1.805-4.494l-1.474-1.352zm-1.325 6.738h12.375v-2h-12.375v2z"
      fill="#FFE9C9"
    />
  </svg>
)

export default SvgComponent
